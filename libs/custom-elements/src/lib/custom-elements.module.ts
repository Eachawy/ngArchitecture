import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe} from "./cus-pip/filter.pipe";
import { hasPermeationDirective } from './cus-dire/hasPermeation.directive';
import { chassisNumberPanel } from './cus-comp/chassisNumberPanel';
import { SvisDropDownMenuComponent } from './cus-comp/svis-drop-down-menu.component';
import { SVISInputComponent } from './cus-comp/SVIS-Input.component';
import { LanguageServicesModule } from '@SVIS/language-services';
import { KeyFilterModule } from "primeng/keyfilter";
import { PickListModule } from "primeng/picklist";
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { DialogModule } from "primeng/dialog";
import { TabViewModule } from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/primeng';

const tools = [
  FilterPipe, 
  hasPermeationDirective, 
  chassisNumberPanel, 
  SvisDropDownMenuComponent,
  SVISInputComponent
];

const primeng = [
  KeyFilterModule,
  PickListModule,
  AutoCompleteModule,
  InputTextModule,
  CalendarModule,
  AccordionModule,
  DropdownModule,
  MultiSelectModule,
  InputSwitchModule,
  DialogModule,
  TabViewModule,
  RadioButtonModule,
  InputMaskModule
];


@NgModule({
  declarations:[tools],
  imports: [CommonModule, BrowserAnimationsModule ,FormsModule, primeng, LanguageServicesModule ],
  exports:[tools, primeng]
})
export class CustomElementsModule {}
