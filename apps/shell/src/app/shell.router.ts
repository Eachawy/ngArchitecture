import { Routes } from '@angular/router';
import { loginComponent } from '@SVIS/common-pages';
import { AppComponent } from './app.component';
import { UserRouteAccessService } from 'libs/auth/src/lib/user-route-access-service';
export const sellRouter: Routes = [
    { path: 'login', component: loginComponent },
    {
        path: 'welcome',
        data: {
            authorities: ['welcome']
        },
        component: AppComponent,
        canActivate: [UserRouteAccessService]
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }    
];
