import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*-------*/
import { HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'translation is not available';
  }
}

export function createTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http, './assets/i18n/common/', '.json');
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/', suffix: '/common.json' },
    { prefix: './assets/i18n/', suffix: '/appointment.json' },
    { prefix: './assets/i18n/', suffix: '/inspection.json' }
  ]);
}

/*-------*/

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler
      },
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
      //isolate: true this is just for child not root
    })
  ],
  exports: [TranslateModule]
})
export class LanguageServicesModule {}
