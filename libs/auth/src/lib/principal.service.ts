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
  public landingPage: any = [];
  public defaultLang: string;
  public componentTitle = new BehaviorSubject<string>('');
  private authoritiesResp: string; 
  private authoritiesCodeResp: string;

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

    this.authoritiesResp = this.USUrl.get('#/'+authorities[0]);
    if(this.authoritiesResp) {
        this.componentTitle.next(this.authoritiesResp);
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
    this.authoritiesCodeResp = this.USCode.get(authorities[0]);
    if(this.authoritiesCodeResp) {
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

  // getIdentity(force?: boolean, credentials?: any): Promise<any> {
  //   if (force === true) {
  //     this.userIdentity = undefined;
  //   }

  //   // check and see if we have retrieved the userIdentity data from the server.
  //   // if we have, reuse it by immediately resolving
  //   if (this.userIdentity) {
  //     return Promise.resolve(this.userIdentity);
  //   }

  //   // retrieve the userIdentity data from the server, update the identity object, and then resolve.
  //   return this.account
  //     .getUserContext(credentials)
  //     .toPromise()
  //     .then(response => {
  //       const account = response.body.data;
  //       return this.injectData(account);
        
  //     })
  //     .catch(err => {
  //       this.userIdentity = null;
  //       this.authenticated = false;
  //       this.authenticationState.next(this.userIdentity);
  //       return null;
  //     });
  // }

  // injectData(account){
  //   this.accountObj = [account[0].permissionTree];
  //   this.landingPage = account[0].landingPage.url;
  //   if (account) {
  //     this.userIdentity = account;
  //     // console.log('authentication State ===== ' + JSON.stringify(account));
  //     this.defaultLang = account[0].user.defaultLanguage;
  //     this.setDataAuthorities(this.accountObj);
      
  //     this.authenticated = true;
  //   } else {
  //     this.userIdentity = null;
  //     this.authenticated = false;
  //   }
  //   this.authenticationState.next(this.userIdentity);
  //   return this.userIdentity;
  // }

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
        const account = response.body['data'][0];
        this.accountObj = [account.permissionTree];
        this.landingPage = account.landingPage.url;
        if (account) {
          this.userIdentity = account.user;
          // console.log('authentication State ===== ' + JSON.stringify(account));
          this.defaultLang = account.user.defaultLanguage;
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
          this.USUrl.set(child.url, {'lang1': child.nameLang1, 'lang2': child.nameLang2});
        }
        if(child.components.length > 0){
          child.components.forEach(cCode => {
            this.USCode.set(cCode, true);
          });
        }
        if(child.pages.length > 0){
          this.setDataAuthorities(child.pages);
        }
    });
  }

  getUserContextURL() {
    return this.USUrl;
  }

  clearUserContextPermission(){
    this.USUrl = new Map();
    this.USCode = new Map();
  }

  get getUserIdentity(){
    return this.userIdentity;
  }

}

