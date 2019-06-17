import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { sharedLibs } from '@SVIS/sharedLibs';
import { SharedLibsModule } from '@SVIS/shared-libs';
import {
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent
  breadCrumbComponent,
  LoadingPageComponent,
  LoadingCompComponent
} from '.';
import { LanguageServicesModule } from '@SVIS/language-services';
// import { LanguageServicesModule } from '@SVIS/language-services';
const layoutFiles = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent
  breadCrumbComponent,
  LoadingPageComponent,
  LoadingCompComponent
];

@NgModule({
  declarations: [layoutFiles],
  imports: [CommonModule, RouterModule, sharedLibs, LanguageServicesModule],
  exports: [layoutFiles]
  imports: [CommonModule, RouterModule, SharedLibsModule],
  exports: [layoutFiles, SharedLibsModule]
})
export class LayoutsModule {}
