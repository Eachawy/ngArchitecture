import { Routes } from '@angular/router';


import { DispatchHomeComponent } from './dispatch/dispatch-home.component';
import { TokenNumberComponent } from './dispatch/token-number.component';
import { VehicleDetailsComponent } from './dispatch/vehicle-details.component';
import { VehicleSearchComponent } from './dispatch/vehicle-search.component';


import { UserRouteAccessService } from 'libs/auth/src/lib/user-route-access-service';
export const PagesRoute: Routes = [
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
];
