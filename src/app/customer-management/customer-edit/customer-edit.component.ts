import { Customer } from './../../entities/customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: string;
  customer: Customer;
  errors: string;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        params => {
          console.log('1');
          this.id = params['id'];

          console.log('2');

          if (this.id === '') {
            console.log('3');
            return;
          } else if (this.id === 'new') {
            console.log('4');
            this.customer = {
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
            };
            console.log('5');
          } else {
            console.log('6');
            this.customerService.findById(this.id).subscribe(
              customer => { console.log('7'); this.customer = customer; this.errors = ''; },
              error => { console.log('8'); this.errors = 'Error loading customer'; }
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
      },
      err => {
        this.errors = 'Error saving customer';
      }
    );
  }
}
