import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { sharedLibs } from '@SVIS/sharedLibs';
import {
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent
} from '.';
import { LanguageServicesModule } from '@SVIS/language-services';
const layoutFiles = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent
];

@NgModule({
  declarations: [layoutFiles],
  imports: [CommonModule, RouterModule, sharedLibs, LanguageServicesModule],
  exports: [layoutFiles]
})
export class LayoutsModule {}
