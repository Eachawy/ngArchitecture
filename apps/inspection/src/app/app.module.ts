import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { createCustomElement } from '@angular/elements';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { MessageService } from 'primeng/api';
import { DragulaModule } from 'ng2-dragula';

// import { SharedLibsModule } from '@SVIS/shared-libs';
// import { LanguageServicesModule } from '@SVIS/language-services';
import { LayoutsModule } from '@SVIS/layouts';
import { CommonPagesModule } from '@SVIS/common-pages';
import { ErrorHandlerInterceptor } from '@SVIS/interceptor';
import { AuthInterceptor } from '@SVIS/interceptor';

import {
  AppComponent,
  EmptyComponent,
  CoreComponent,
  InspectionHomeComponent,
  TokenNumberComponent,
  VehicleDetailsComponent,
  VehicleSearchComponent,
  AppRoute
  } from '.';

  
const pages = [
  InspectionHomeComponent,
  TokenNumberComponent,
  VehicleDetailsComponent,
  VehicleSearchComponent,
  CoreComponent,
  AppComponent,
  EmptyComponent
];

@NgModule({
  declarations: [pages],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonPagesModule,
    LayoutsModule,
    NxModule.forRoot(),
    DragulaModule.forRoot(),
    RouterModule.forRoot(AppRoute, { initialNavigation: 'enabled', useHash: true })
  ],
  bootstrap: [],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService]
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true,
        deps: [MessageService]
    }
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('app-inspection', appElement);
  }
}
