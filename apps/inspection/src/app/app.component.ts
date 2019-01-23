import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  OnChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'libs/language-services/src/lib/language.service';
import { BehaviorSubject } from 'rxjs';
import { StateStorageService } from '@SVIS/auth';
import { environment } from '../environments/environment';
@Component({
  selector: 'SVIS-root',
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnChanges {
  private _data = new BehaviorSubject<string>('en');
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

  constructor(private router: Router, private langS: LanguageService, private stateStorageService: StateStorageService) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/inspection-login']);
    }
    // Get data from parent Component
    this._data.subscribe(obj => {
      // console.log('inspection received state of lang', obj);
      this.langS.changeLanguage(obj);
      // const Reflect = this.stateStorageService.getUrl();   
      // this.router.navigated = false;
      // this.router.navigate([Reflect]);  
    });
    this._TKdata.subscribe(obj => {
      // console.log('inspection received _TKdata', obj);
      this.getTk = obj;
    });
  }

  ngOnChanges () {

  }

}
