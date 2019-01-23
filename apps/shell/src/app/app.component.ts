import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';
import { LanguageService } from 'libs/language-services/src/lib/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'SVIS-root',
  template: `
      <master>
        <div id="content">
          <!-- Web Components go here -->
        </div>
      </master>
  `
})
export class AppComponent implements OnInit {
  private init: any;
  constructor(
    private stateService: StateService,
    private langServ: LanguageService,
    private router: Router
  ) {
    this.langServ.lang$.subscribe(lang => {
      this.init = lang;
    });
  }

  config = {
    appintment: {
      loaded: false,
      path: 'assets/app/appointment/main.js',
      element: 'app-appointment'
    },
    inspection: {
      loaded: false,
      path: 'assets/app/inspection/main.js',
      element: 'app-inspection'
    },
    examination: {
      loaded: false,
      path: 'assets/app/examination/main.js',
      element: 'app-examination'
    }
  };

  ngOnInit() {
    this.load('appintment');
    this.load('inspection');
    this.load('examination');
    this.router.ngOnDestroy();
  }

  load(name: string): void {
    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('lang-state', this.init);
    element.setAttribute('state', 'token');

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    this.stateService.registerClient(element);
  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

}
