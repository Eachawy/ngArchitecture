import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './cus-pip/filter.pipe';
import { hasPermeationDirective } from './cus-dire/hasPermeation.directive';
import { chassisNumberPanel } from './cus-comp/chassisNumberPanel';
import { SvisDropDownMenuComponent } from './cus-comp/svis-drop-down-menu.component';
import { SVISAutoCompleteComponent } from './cus-comp/SVIS-autoComplete.component';
import { SVISInputComponent } from './cus-comp/SVIS-Input.component';
import { SVISTableComponent } from './cus-comp/SVIS-table.component';
import { SVISCalendarComponent } from './cus-comp/SIVS-calendar.component';
import { SVISVehicleTransactionComponent } from './cus-comp/SVIS-vehicleTransaction.component';
import { LanguageServicesModule } from '@SVIS/language-services';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PickListModule } from 'primeng/picklist';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/primeng';
import { ScrollPanelModule } from 'primeng/scrollpanel';


const tools = [
  FilterPipe,
  hasPermeationDirective,
  chassisNumberPanel,
  SvisDropDownMenuComponent,
  SVISInputComponent,
  SVISAutoCompleteComponent,
  SVISVehicleTransactionComponent,
  SVISTableComponent,
  SVISCalendarComponent
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
  TableModule,
  RadioButtonModule,
  InputMaskModule,
  ScrollPanelModule
];


@NgModule({
  declarations: [tools],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, primeng, LanguageServicesModule,
    ReactiveFormsModule],
  exports: [tools, primeng, FormsModule, LanguageServicesModule]
})
export class CustomElementsModule {
}
