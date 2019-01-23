import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { DragulaModule } from 'ng2-dragula';
import { sharedLibs } from '@SVIS/sharedLibs';
import { LanguageServicesModule } from '@SVIS/language-services';
import { LayoutsModule } from '@SVIS/layouts';
import {
  AppComponent,
  CoreComponent,
  EmptyComponent,
  DispatchHomeComponent,
  TokenNumberComponent,
  VehicleDetailsComponent,
  VehicleSearchComponent,
  inspectionRoute
} from '.';

import { CommonPagesModule } from '@SVIS/common-pages';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'libs/interceptor/src/lib/auth.interceptor';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ErrorHandlerInterceptor } from 'libs/interceptor/src/lib/errorhandler.interceptor';
import { MessageService } from 'primeng/api';

const pages = [
  AppComponent,
  CoreComponent,
  EmptyComponent,
  DispatchHomeComponent,
  TokenNumberComponent,
  VehicleDetailsComponent,
  VehicleSearchComponent
];

@NgModule({
  declarations: [pages],
  imports: [
    BrowserModule,
    LayoutsModule,
    CommonPagesModule,
    NxModule.forRoot(),
    sharedLibs,
    DragulaModule.forRoot(),
    LanguageServicesModule,
    RouterModule.forRoot(inspectionRoute, { initialNavigation: 'enabled', useHash: true })
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
