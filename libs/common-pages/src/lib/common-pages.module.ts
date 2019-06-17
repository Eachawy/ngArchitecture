import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  loginComponent,
  noAccessComponent
} from '.';
// import { LanguageServicesModule } from '@SVIS/language-services';
import { SharedLibsModule } from '@SVIS/shared-libs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const pages = [
  loginComponent,
  noAccessComponent
];

@NgModule({
  declarations: [pages],
  imports: [CommonModule, BrowserAnimationsModule, SharedLibsModule],
  exports: [pages],
  entryComponents: [loginComponent]
})
export class CommonPagesModule {}
