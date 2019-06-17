import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '@SVIS/language-services';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'SVIS-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnChanges {
  private _data = new BehaviorSubject<string>('en');
  private _TKdata = new BehaviorSubject<string>('');
  private getTk: string;
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

  constructor(private router: Router, private langS: LanguageService) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    // Standalone mode
    if (false) {
      this.router.navigate(['/appointment/page1']);
    }

    // Get data from parent Component
    this._data.subscribe(obj => {
      console.log('appointment received state', obj);
      this.langS.changeLanguage(obj);
    });
    this._TKdata.subscribe(obj => {
      // console.log('appointment received _TKdata', obj);
      this.getTk = obj;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('appointment received state', changes);
  }
}
