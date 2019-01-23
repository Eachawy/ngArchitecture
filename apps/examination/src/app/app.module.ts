import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CoreComponent } from './core/core.component';
import { EmptyComponent } from './empty/empty.component';
import { createCustomElement } from '@angular/elements';

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
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'examination',
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
    customElements.define('app-examination', appElement);
  }
}
