import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe} from "./cus-pip/filter.pipe";
import { hasPermeationDirective } from './cus-dire/hasPermeation.directive';
import { chassisNumberPanel } from './cus-comp/chassisNumberPanel';
const tools = [FilterPipe, hasPermeationDirective, chassisNumberPanel]


@NgModule({
  declarations:[tools],
  imports: [CommonModule],
  exports:[tools]
})
export class CustomElementsModule {}
