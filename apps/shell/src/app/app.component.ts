import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';
import { LanguageService } from '@SVIS/language-services';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'SVIS-root',
  template: `
      <master>
        <main id="content">
          <!-- Web Components go here -->
        </main>
      </master>
  `,
  styles:[]
})
export class AppComponent implements OnInit {
  private init: any;
  constructor(
    private stateService: StateService,
    private langServ: LanguageService,
    private router: Router,
    private http: HttpClient
  ) {
    this.langServ.lang$.subscribe(lang => {
      this.init = lang;
    });
  }

  ngOnInit() {
    this.appList();
    this.router.ngOnDestroy();
  }

  appList(): void {
    this.http.get('../assets/app/app.json?cb=' + new Date().getTime(), {
      observe: 'response'
    }).subscribe( (res: any) => {
      const subAppList = res.body[0];
        console.table(subAppList);
        Object.keys(subAppList).forEach(key => {
           this.supApplicationLoading(subAppList,key);
        });
    });
  }

  supApplicationLoading(appName: any, name: string): void {
    const configItem = appName[name];
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
    console.log('shell received message: ', msg.detail);
  }

}
