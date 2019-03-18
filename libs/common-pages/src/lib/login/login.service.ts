import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Principal } from '@SVIS/auth';
import { AuthServerProvider } from '@SVIS/auth';

import { LanguageService } from '@SVIS/language-services';
import { SERVER_API_URL } from '@SVIS/common-services';
const url = "http://127.0.0.1:8181/";
@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private principal: Principal,
    private authServerProvider: AuthServerProvider
  ) {}

  login(credentials, callback?) {
    const cb = callback || function() {};
    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          this.principal
                    .identity(true)
                    .then(account => {
                      // After the login the language will be changed to
                      // the language selected by the user during his registration
                      if (account !== null) {
                        this.languageService.changeLanguage(
                          account[0].user.defaultLanguage
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

  logout() {
    this.authServerProvider.logout().subscribe();
    this.principal.authenticate(null);
  }

  getConfigSystem() {
    return this.http.get(url + 'ConfgSys', { observe: 'response' });
  }

}
