import { Injectable } from '@angular/core';

import { Principal } from 'libs/auth/src/lib/principal.service';
import { AuthServerProvider } from 'libs/auth/src/lib/auth-jwt';

import { LanguageService } from 'libs/language-services/src/lib/language.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private languageService: LanguageService,
    private principal: Principal,
    private authServerProvider: AuthServerProvider
  ) {}

  login(credentials, callback?) {
    const cb = callback || function() {};
    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          this.principal.identity(true).then(account => {
            
            // After the login the language will be changed to
            // the language selected by the user during his registration
            if (account !== null) {
              this.languageService.changeLanguage(account[0].user.defaultLanguage);
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
}
