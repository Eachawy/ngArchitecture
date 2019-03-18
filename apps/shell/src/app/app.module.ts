import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LayoutsModule } from '@SVIS/layouts';
import { CommonPagesModule } from '@SVIS/common-pages';
import { SharedLibsModule } from '@SVIS/shared-libs';
import { AppComponent } from './app.component';
import { rootComponent } from './root.component';
import { DEBUG_INFO_ENABLED } from '@SVIS/common-services';
import { AuthInterceptor, ErrorHandlerInterceptor } from '@SVIS/interceptor';
import { MessageService } from 'primeng/api';
import { sellRouter } from './shell.router';

@NgModule({
  declarations: [AppComponent, rootComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    CommonPagesModule,
    SharedLibsModule,
    LayoutsModule,
    RouterModule.forRoot(sellRouter,
      {
        initialNavigation: 'enabled',
        useHash: true,
        enableTracing: DEBUG_INFO_ENABLED
      }
    )
  ],
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [rootComponent]
})
export class AppModule {}
