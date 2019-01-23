import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, observable, of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class Principal {
  private userIdentity: any;
  private authenticated = false;
  private authenticationState = new Subject<any>();
  private USUrl = new Map();
  private USCode = new Map();
  public accountObj: any = [];
  public defaultLang: string;
  public componentTitle = new BehaviorSubject<string>('');
  private parent: string;
  constructor(private account: AccountService) {
    this.componentTitle.asObservable();
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[], type: string): Promise<boolean> {
    switch (type) {
      case 'Direct':
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
        break;
      case 'Code':
        return Promise.resolve(this.hasAnyAuthorityCode(authorities));
        break;
    }    
  }

  hasAnyAuthorityDirect(authorities: string[]): boolean {
    if (
      !this.authenticated ||
      !this.userIdentity ||
      !this.USUrl
    ) {
      return false;
    }

    let authoritiesResp = this.USUrl.get('#/'+authorities[0]);
    if(authoritiesResp) {
        this.componentTitle.next(authoritiesResp);
        return true;
    }
    return false;
  }

  hasAnyAuthorityCode(authorities: string[]): boolean {
    if (
      !this.authenticated ||
      !this.userIdentity ||
      !this.USUrl
    ) {
      return false;
    }
    let authoritiesCodeResp = this.USCode.get(authorities[0]);
    if(authoritiesCodeResp) {
        return true;
    }
    return false;
  }

  hasAuthority(authority: string): Promise<boolean> {
    if (!this.authenticated) {
      return Promise.resolve(false);
    }

    return this.identity().then(
      id => {
        return Promise.resolve(
          id.authorities && id.authorities.includes(authority)
        );
      },
      () => {
        return Promise.resolve(false);
      }
    );
  }

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.userIdentity = undefined;
    }

    // check and see if we have retrieved the userIdentity data from the server.
    // if we have, reuse it by immediately resolving
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }

    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.account
      .get()
      .toPromise()
      .then(response => {
        const account = response.body;
        this.accountObj = account[0].permissionTree;
        if (account) {
          this.userIdentity = account;
          this.defaultLang = account[0].user.defaultLanguage
          // console.log('authentication State ===== ' + JSON.stringify(account));
          this.setDataAuthorities(this.accountObj);
          this.authenticated = true;
        } else {
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch(err => {
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isIdentityResolved(): boolean {
    return this.userIdentity !== undefined;
  }

  getAuthenticationState(): Observable<any> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): string {
    return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
  }

  setDataAuthorities(account) {
    account.forEach(child => {
        if(child.url){
          this.USUrl.set(child.url, [child.name, child.nameAr]);
          // this.parent ? this.USUrl.set(child.url, [child.name, child.nameAr, this.parent]) : this.USUrl.set(child.url, [child.name, child.nameAr]);
        }
        if(child.components.length > 0){
          child.components.forEach(cCode => {
            this.USCode.set(cCode, true);
          });
        }
        if(child.pages.length > 0){
          // this.parent = child.url;
          // console.log('parent' + this.parent);
          this.setDataAuthorities(child.pages);
        }
    });

    console.log(this.USUrl);

    // for (let IUrl = 0; IUrl < account[0].permissionTree.length; IUrl++) {

    //   const ElIUrl = account[0].permissionTree[IUrl].url;
    //   if(ElIUrl) {this.USUrl.set(ElIUrl, true);}

    //   for (let ICD = 0; ICD < account[0].permissionTree[IUrl].pages.length; ICD++) {

    //     const ElIUrlSub = account[0].permissionTree[IUrl].pages[ICD].url;
    //     if(ElIUrlSub) {this.USUrl.set(ElIUrlSub, true);}

    //     for (let i = 0; i < account[0].permissionTree[IUrl].pages[ICD].components.length; i++) {

    //       const ElICD = account[0].permissionTree[IUrl].pages[ICD].components[i];
    //       if(ElICD) {this.USCode.set(ElICD, true);}

    //     }


    //     for (let iurlMC = 0; iurlMC < account[0].permissionTree[IUrl].pages[ICD].pages.length; iurlMC++) {

    //       const ElURLMC = account[0].permissionTree[IUrl].pages[ICD].pages[iurlMC].url;
    //       if(ElURLMC) {this.USUrl.set(ElURLMC, true);}


    //       for (let iMSCP = 0; iMSCP < account[0].permissionTree[IUrl].pages[ICD].pages[iurlMC].components.length; iMSCP++) {

    //         const ElMSCP = account[0].permissionTree[IUrl].pages[ICD].pages[iurlMC].components[iMSCP];
    //         if(ElMSCP) {this.USCode.set(ElMSCP, true);}
  
    //       }

    //     }



    //   }
    // }
  }



}
