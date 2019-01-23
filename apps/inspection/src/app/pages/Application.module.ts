import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { LanguageServicesModule } from '@SVIS/language-services';
import { sharedLibs } from '@SVIS/sharedLibs';
import { LayoutsModule } from '@SVIS/layouts';
import { CoreComponent } from './core.component';
import {
    DispatchHomeComponent,
    TokenNumberComponent,
    VehicleDetailsComponent,
    VehicleSearchComponent,
    PagesRoute
} from '.';

const AppPages = [
    DispatchHomeComponent,
    TokenNumberComponent,
    VehicleDetailsComponent,
    VehicleSearchComponent,
    CoreComponent
];

@NgModule({
    declarations:[AppPages],
    imports:[
        CommonModule,
        sharedLibs,
        RouterModule.forChild(PagesRoute),
        LayoutsModule,
        LanguageServicesModule,
        DragulaModule.forRoot()
    ]
})

export class ApplicationModule {}