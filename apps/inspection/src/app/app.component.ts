import {
    Component,
    ViewEncapsulation,
    OnInit,
    Input,
    OnChanges,
    Output,
    EventEmitter
  } from '@angular/core';
  import { Router } from '@angular/router';
  import { LanguageService } from '@SVIS/language-services';
  import { BehaviorSubject } from 'rxjs';
  import { environment } from '../environments/environment';
import { Principal } from '@SVIS/auth';
  
  @Component({
    selector: 'SVIS-root',
    template: `
      <router-outlet></router-outlet>
    `,
    encapsulation: ViewEncapsulation.Emulated
  })
  export class AppComponent implements OnInit, OnChanges {
    private _data = new BehaviorSubject<string>('Lang1');
    private _TKdata = new BehaviorSubject<string>('');
    private getTk: any;
    @Input('lang-state')
      set langState(langState) {
        this._data.next(langState);
      }
      get langState() {
        return this._data.getValue();
      }
    @Input('state')
      set state(state) {
        this._TKdata.next(state);
      }
      get state() {
        return this._TKdata.getValue();
      }
  
  
    @Output() message = new EventEmitter<any>();
  
  
  
  
  
    constructor(
      private router: Router, 
      private langS: LanguageService,
      private principal: Principal) {}
  
    ngOnInit() {

      this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
      // Standalone mode
      if (environment.standalone) {
          this.router.navigate(['/login']);
        }
      // Get data from parent Component
      this._data.subscribe(obj => {
        console.log('inspection received state of lang', obj);
        this.langS.changeLanguage(obj);
        // const Reflect = this.stateStorageService.getUrl();
        // this.router.navigated = false;
        // this.router.navigate([Reflect]);
      });
      this._TKdata.subscribe(obj => {
        // console.log('inspection received _TKdata', obj);
        this.getTk = obj;
      });
  
  
      // just for demonstration!
      setTimeout(() => {
        this.message.next('inspection initialized!');
      }, 2000);
  
  
    }
  
    ngOnChanges () {}
  
  }