import { Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { EmptyComponent } from './empty/empty.component';
import { DispatchHomeComponent } from './dispatch/dispatch-home.component';
import { TokenNumberComponent } from './dispatch/token-number.component';
import { VehicleDetailsComponent } from './dispatch/vehicle-details.component';
import { VehicleSearchComponent } from './dispatch/vehicle-search.component';
import { loginComponent, noAccessComponent } from '@SVIS/common-pages';

import { UserRouteAccessService } from 'libs/auth/src/lib/user-route-access-service';
export const inspectionRoute: Routes = [
  {
    path: 'inspection',
    component: CoreComponent,
    children: [
        { 
            path: 'DispatchHome', 
            component: DispatchHomeComponent,
            data: {
                authorities: ['inspection/DispatchHome'],
                pageTitle: "",
                breadcrumb: ""
            },
            canActivate:[UserRouteAccessService]
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
  { path: 'inspection-login', component: loginComponent },
  { path: 'accessdenied', component: noAccessComponent },
  { path: '**', component: EmptyComponent }
];
