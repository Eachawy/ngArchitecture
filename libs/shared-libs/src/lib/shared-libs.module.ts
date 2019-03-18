import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // MaterializeModule,
import { CustomElementsModule } from '@SVIS/custom-elements';
import { ToastModule } from 'primeng/toast';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { MessageService } from 'primeng/api';

const libs = [
  CommonModule,
  HttpClientModule, 
  FormsModule, 
  ReactiveFormsModule,
  MaterializeModule,
  CustomElementsModule,
  ToastModule
];
@NgModule({
  imports: [libs, NgxWebstorageModule.forRoot({ prefix: 'SVIS', separator: '-' })],
  exports: [libs, NgxWebstorageModule],
  providers:[MessageService]
})
export class SharedLibsModule {}
