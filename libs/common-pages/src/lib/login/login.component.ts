import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { StateStorageService } from '@SVIS/auth';
import { SessionStorageService } from 'ngx-webstorage';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LanguageService } from '@SVIS/language-services';
@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {

  authenticationError: boolean = false;
  loginForm: FormGroup;
  forgetPassForm: FormGroup;
  forgetPassword:boolean = false;
  defaultLang: string;
  confSys: any;
  supportNum: string;
  supportEmil: string;
  systemName: string;
  isLoadding:boolean = false;

  constructor(
    private loginService: LoginService,
    private stateStorageService: StateStorageService,
    private languageService: LanguageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private $sessionStorage: SessionStorageService
  ) {}

  ngOnInit(){
    this.getStartSystem();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.forgetPassForm = this.formBuilder.group({
        Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
    this.stateStorageService.storeUrl('');
  }

  login() {
    this.isLoadding = true;
    this.loginService
      .login(this.loginForm.value)
      .then(() => {
        this.authenticationError = false;
        // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // since login is succesful, go to stored previousState and clear previousState
        this.isLoadding = false;

        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.router.navigate([redirect]);
          return false;
        }
        this.router.navigate(['welcome']); 
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }

  resetPassword(){
    console.log(this.forgetPassForm.value);
  }

  forgetPass(){
    this.forgetPassword = true;
  }

  singeUp(){
    this.forgetPassword = false;
  }

  getStartSystem(){
    this.loginService.getConfigSystem().subscribe(
      (res: HttpResponse<[]>) =>  {
        console.log(res);
          this.confSys = res.body;
          this.confSys = this.confSys.data[0];
          const ConfigSystemLanguage = this.confSys.languages;
          this.$sessionStorage.store('langObj', ConfigSystemLanguage);
          this.languageService.changeLanguage(this.confSys.defaultLang, ConfigSystemLanguage);
          this.defaultLang = this.confSys.defaultLang;
          this.supportNum = this.confSys.supportNumber;
          this.supportEmil = this.confSys.supportEmail;
          this.systemName = this.confSys.systemNameLang1;
        }
      ,
      (res: HttpErrorResponse) => console.log(res.message)
    );
  }

  onChangeLang(key) {
    switch (key) {
      case "lang1":
        this.defaultLang = "Lang2";
        this.languageService.changeLanguage(this.defaultLang);
        break;
      case "lang2":
         this.defaultLang = "Lang1";
        this.languageService.changeLanguage(this.defaultLang);
        break;
    }
  }

}
