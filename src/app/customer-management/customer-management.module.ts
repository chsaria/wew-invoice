import { CUSTOMER_MANAGEMENT_ROUTES } from './customer-management.routes';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerManagementComponent } from './customer-management.component';
import { CustomerService } from './customer-service/customer.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(CUSTOMER_MANAGEMENT_ROUTES)
],
  declarations: [
    CustomerManagementComponent,
    CustomerCardComponent,
    CustomerEditComponent,
    CustomerSearchComponent
],
  providers: [
    CustomerService
],
  exports: [
    CustomerSearchComponent
]
})
export class CustomerManagementModule { }
