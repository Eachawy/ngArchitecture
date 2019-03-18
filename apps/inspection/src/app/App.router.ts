import { Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { loginComponent, noAccessComponent } from '@SVIS/common-pages';
import { CoreComponent } from './core.component';


import { InspectionHomeComponent } from './dispatch/inspection-home.component';
import { TokenNumberComponent } from './dispatch/token-number.component';
import { VehicleDetailsComponent } from './dispatch/vehicle-details.component';
import { VehicleSearchComponent } from './dispatch/vehicle-search.component';
import { UserRouteAccessService } from 'libs/auth/src/lib/user-route-access-service';


export const AppRoute: Routes = [
    {
        path:'inspection',
        component: CoreComponent,
        children:[
            { 
                path: '', 
                component: InspectionHomeComponent,
                canActivate:[UserRouteAccessService],
                data: {
                    authorities: ['inspection'],
                    pageTitle: "",
                    breadcrumb: ""
                }
            },
            { 
                path: 'VehicleSearch', 
                component: VehicleSearchComponent,
                data: {
                    authorities: ['inspection/VehicleSearch'],
                    pageTitle: "",
                    breadcrumb: ""
                },
                canActivate:[UserRouteAccessService]
            },
            { 
                path: 'VehicleDetails', 
                component: VehicleDetailsComponent,
                data: {
                    authorities: ['inspection/VehicleDetails'],
                    pageTitle: "",
                    breadcrumb: ""
                },
                canActivate:[UserRouteAccessService]
            },
            { 
                path: 'TokenNumber', 
                component: TokenNumberComponent,
                data: {
                    authorities: [],
                    pageTitle: "",
                    breadcrumb: ""
                },
                canActivate:[UserRouteAccessService]
            }
        ]
    },
    { 
        path: 'login', 
        component: loginComponent
    },
    { path: '**', component: EmptyComponent }
];
