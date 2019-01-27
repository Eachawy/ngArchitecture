import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { StateStorageService } from 'libs/auth/src/lib/state-storage.service';
    @Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  forgetPassword:boolean = false;
  defaultLang = false;

  constructor(
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private router: Router
  ) {}

  login() {
    this.loginService
      .login({
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe = false
      })
      .then(() => {
        this.authenticationError = false;

        //   this.eventManager.broadcast({
        //       name: 'authenticationSuccess',
        //       content: 'Sending Authentication Success'
        //   });

        // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // since login is succesful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigate([redirect]);
        }
        this.router.navigate(['welcome']);
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }

  requestResetPassword() {
    // this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/reset', 'request']);
  }
  forgetPass(){
    this.forgetPassword = true;
  }

  singeUp(){
    this.forgetPassword = false;
  }
  changeLang(){
    this.defaultLang = !this.defaultLang;
  }

}
