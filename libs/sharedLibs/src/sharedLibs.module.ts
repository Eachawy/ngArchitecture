import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MaterializeModule,
import { CustomElementsModule } from '@SVIS/custom-elements';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KeyFilterModule } from "primeng/keyfilter";
import { PickListModule } from "primeng/picklist";
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { DialogModule } from "primeng/dialog";
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { MessageService } from 'primeng/api';

const libs = [
  CommonModule,
  HttpClientModule, 
  FormsModule, 
  ReactiveFormsModule,
  BrowserAnimationsModule,
  KeyFilterModule,
  PickListModule,
  AutoCompleteModule,
  InputTextModule,
  CalendarModule,
  AccordionModule,
  DropdownModule,
  InputSwitchModule,
  DialogModule,
  TabViewModule,
  MaterializeModule,
  CustomElementsModule,
  ToastModule
];
@NgModule({
  imports: [libs, NgxWebstorageModule.forRoot({ prefix: 'SVIS', separator: '-' })],
  exports: [libs, NgxWebstorageModule],
  providers:[MessageService]
})
export class sharedLibs {
  // static forRoot(): ModuleWithProviders;
}
