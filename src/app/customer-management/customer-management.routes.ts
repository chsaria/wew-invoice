
import { Routes } from '@angular/router';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';

export const CUSTOMER_MANAGEMENT_ROUTES: Routes = [
    {
        path: 'customers',
        component: CustomerSearchComponent
    },
    {
        path: 'customers/:id',
        component: CustomerEditComponent
    }
];
