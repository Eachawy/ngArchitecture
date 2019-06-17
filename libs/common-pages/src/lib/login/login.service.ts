import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Principal } from '@SVIS/auth';
import { AuthServerProvider } from '@SVIS/auth';

import { LanguageService } from '@SVIS/language-services';
import { SERVER_API_URL } from '@SVIS/common-services';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private principal: Principal,
    private $sessionStorage: SessionStorageService,
    private authServerProvider: AuthServerProvider
  ) {}

  login(credentials, callback?) {
    const cb = callback || function() {};
    return new Promise((resolve, reject) => {
      // this.principal
      // .getIdentity(true, credentials)
      // .then(account => {
      //   // After the login the language will be changed to
      //   // the language selected by the user during his registration
      //   if (account !== null) {
      //     this.languageService.changeLanguage(
      //       account[0].user.defaultLanguage
      //     );
      //   }
      //   resolve(account);
      // }).catch(err => {
      //   reject(err);
      // });
      this.authServerProvider.login(credentials).subscribe(
        data => {
          console.log(`${JSON.stringify(data)} ====== ${JSON.stringify(credentials)}`);
          this.principal
                    .identity(true)
                    .then(account => {
                      // After the login the language will be changed to
                      // the language selected by the user during his registration
                      if (account !== null) {
                        this.languageService.changeLanguage(
                          account.defaultLanguage
                        );
                      }
                      resolve(data);
                    });
                  return cb();
                },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );

    });
  }

  logout(){
    this.authServerProvider.logout();
  }

  getConfigSystem() {
    // return this.http.get(SERVER_API_URL + 'SVISRestAPIs/CheckRequest/getResponse', { observe: 'response' });
    return this.http.get(SERVER_API_URL + 'public/generalData', { observe: 'response' });
  }

}
