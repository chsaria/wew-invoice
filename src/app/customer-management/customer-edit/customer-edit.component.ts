import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../../entities/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: string;
  customer: Customer = {
    _id: '',
    Name: '',
    Address1: '',
    Address2: '',
    Address3: '',
    City: '',
    Zipcode: '',
    Phonenumber: '',
    CreatedAtUtc: null,
    ModifiedAtUtc: null,
    Tenant: null
  };
  errors: string;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        params => {
          this.id = params['id'];
          if (this.id === '') {
            return;
          } else if (this.id === 'new') {
          } else {
            this.customerService.findById(this.id).subscribe(
              customer => { this.customer = customer; this.errors = ''; },
              error => { this.errors = 'Error loading customer'; }
            );
          }
        }
    );
  }

  save() {
    if (this.id === 'new') {
      this.createNew();
    } else {
      this.update();
    }
  }

  createNew() {
    this.customerService.create(this.customer).subscribe(
      customer => {
        this.customer = customer;
        this.errors = 'Creating was successful!';
        this.router.navigate(['/customers']);
      },
      err => {
        this.errors = 'Error saving customer';
      }
    );
  }

  update() {
    this.customerService.update(this.customer).subscribe(
      customer => {
        this.customer = customer;
        this.errors = 'Updating was successful!';
        this.router.navigate(['/customers']);
      },
      err => {
        this.errors = 'Error saving customer';
      }
    );
  }
}
