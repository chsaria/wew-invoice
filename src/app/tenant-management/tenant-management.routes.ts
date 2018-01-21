import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantSearchComponent } from './tenant-search/tenant-search.component';
import { Routes } from '@angular/router';

export const TENANT_MANAGEMENT_ROUTES: Routes = [
    {
        path: 'tenants',
        component: TenantSearchComponent
    },
    {
        path: 'tenants/:id',
        component: TenantEditComponent
    }
];
