import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedLibsModule } from '@SVIS/shared-libs';
import {
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent,
  LoadingPageComponent,
  LoadingCompComponent
} from '.';
// import { LanguageServicesModule } from '@SVIS/language-services';
const layoutFiles = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  MasterComponent,
  titlePageComponent,
  breadCrumbComponent,
  LoadingPageComponent,
  LoadingCompComponent
];

@NgModule({
  declarations: [layoutFiles],
  imports: [CommonModule, RouterModule, SharedLibsModule],
  exports: [layoutFiles, SharedLibsModule]
})
export class LayoutsModule {}
