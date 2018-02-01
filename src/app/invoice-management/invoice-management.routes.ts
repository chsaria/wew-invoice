import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { Routes } from '@angular/router';

export const INVOICE_MANAGEMENT_ROUTES: Routes = [
    {
        path: 'invoices',
        component: InvoiceSearchComponent
    },
    {
        path: 'invoices/:id',
        component: InvoiceEditComponent
    }
];
