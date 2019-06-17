import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SERVER_API_URL } from '@SVIS/common-services';
import { Principal } from './principal.service';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private principal: Principal,
    private router: Router,
    private $sessionStorage: SessionStorageService,
    private accountService: AccountService
  ) {}


  headersSecure(credentials) {
    return {
      observable: 'response',
      headers: new HttpHeaders({
         'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password),
      })
    }
  }

  getToken() {
    return (
      this.$localStorage.retrieve('authenticationToken') ||
      this.$sessionStorage.retrieve('authenticationToken')
    );
  }

  login(credentials): Observable<any> {
    return this.http
    .post(SERVER_API_URL + 'secure/login', null, this.headersSecure(credentials) )
    .pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(resp) {
      // const SVISToken = resp.headers.get('Authorization');
      // if (SVISToken && SVISToken.slice(0, 7) === 'Bearer ') {
      //   const jwt = SVISToken.slice(7, SVISToken.length);
      //   this.storeAuthenticationToken(jwt, credentials.rememberMe);
      //   console.log('jwt====>' + jwt);
      //   return jwt;
      // }
      return resp;
    }
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
    }
  }

  // logout(): Observable<any> {
  //   this.http.post( SERVER_API_URL + 'secure/logout', null, {
  //     observe: 'response'
  //   });
  //   return new Observable(observer => {
  //     // this.$localStorage.clear('authenticationToken');
  //     this.$sessionStorage.clear('previousUrl');
  //     observer.complete();
  //   });
  // }



  logout() {
    this.accountService.checkOut().subscribe(res => {
      this.$sessionStorage.clear('previousUrl');
      this.principal.authenticate(null);
      this.principal.clearUserContextPermission();
      this.router.navigate(['login']);
      console.log(` ===================== ${this.principal.getUserContextURL()}`);
    })
  }

}
