import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

// import { sharedLibs } from '@SVIS/sharedLibs';

import { HttpClientModule } from '@angular/common/http';

import { LanguageServicesModule } from '@SVIS/language-services';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CoreComponent } from './core/core.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CoreComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LanguageServicesModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'appointment',
          component: CoreComponent,
          children: [
            { path: 'page1', component: Page1Component },
            { path: 'page2', component: Page2Component }
          ]
        },
        { path: '**', component: EmptyComponent }
      ],
      { initialNavigation: 'enabled', useHash: true }
    )
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('app-appointment', appElement);
  }
}
