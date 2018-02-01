import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../entities/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css'],
  providers: [CustomerService]
})
export class CustomerSearchComponent implements OnInit {

  name: string = '';

  customers: Customer[] = [];

  selectedCustomer: Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.customerService
      .find(this.name)
      .subscribe(
      (customers) => {
        this.customers = customers;
      },
      (errResp) => {
        console.error('Error loading customers', errResp);
      }
      );
  }

  select(c: Customer): void {
    this.selectedCustomer = c;
  }

  new(): void {
    this.router.navigate(['/customers/new']);
  }

  deleteCustomer(customer_id: string): void {
    this.customerService
    .delete(customer_id)
    .subscribe(
      (success) => {
        for (let i = 0; i < this.customers.length; i++) {
          if (this.customers[i]._id === customer_id) {
            this.customers.splice(i, 1);
            break;
          }
        }
      },
      (errResp) => {
        console.error('Error deleting customer', errResp);
      }
    );
  }

  delete(event) {
    this.deleteCustomer(event);
  }
}
