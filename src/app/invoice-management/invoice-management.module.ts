import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceManagementComponent } from './invoice-management.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { INVOICE_MANAGEMENT_ROUTES } from './invoice-management.routes';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { InvoiceService } from './invoice.service';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(INVOICE_MANAGEMENT_ROUTES)
  ],
  declarations: [
    InvoiceManagementComponent,
    InvoiceSearchComponent,
    InvoiceCardComponent,
    InvoiceEditComponent,
    InvoiceCardComponent
    // TenantSearchComponent,
    // TenantCardComponent,
    // TenantEditComponent,
],
  providers: [
    // TenantService
    InvoiceService
  ],
  exports: [
    // TenantSearchComponent
    InvoiceSearchComponent
  ]
})
export class InvoiceManagementModule { }
