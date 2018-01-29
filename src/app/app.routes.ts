import { CustomerSearchComponent } from './customer-management/customer-search/customer-search.component';
import { TenantSearchComponent } from './tenant-management/tenant-search/tenant-search.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';
import { UserSearchComponent } from './user-management/user-search/user-search.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tenants',
        component: TenantSearchComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'users',
        component: UserSearchComponent
    },
    {
        path: 'customers',
        component: CustomerSearchComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
