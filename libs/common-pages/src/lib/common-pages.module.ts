import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  loginComponent,
  noAccessComponent
} from '.';
import { LanguageServicesModule } from '@SVIS/language-services';
import { sharedLibs } from '@SVIS/sharedLibs';
const pages = [
  loginComponent,
  noAccessComponent
];

@NgModule({
  declarations: [pages],
  imports: [CommonModule, LanguageServicesModule, sharedLibs],
  exports: [pages],
  entryComponents: [loginComponent]
})
export class CommonPagesModule {}
