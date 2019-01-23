import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SERVER_API_URL } from '@SVIS/common-services';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {

  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
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
    .post(SERVER_API_URL + 'SVISRestAPIs/CheckRequest/secure/getResponse', null, this.headersSecure(credentials) )
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

  logout(): Observable<any> {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');
      observer.complete();
    });
  }
}
