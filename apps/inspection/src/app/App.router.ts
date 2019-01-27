import { Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { loginComponent, noAccessComponent } from '@SVIS/common-pages';
import { CoreComponent } from './core.component';
export const AppRoute: Routes = [
    {
        path:'inspection',
        component: CoreComponent,
        loadChildren: './pages/Application.module#ApplicationModule'
    },
    { path: 'inspection-login', component: loginComponent },
    { path: 'accessdenied', component: noAccessComponent },
    { path: '**', component: EmptyComponent }
];
