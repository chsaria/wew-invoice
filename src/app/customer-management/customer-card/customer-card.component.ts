import { Customer } from './../../entities/customer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  constructor() { }

  @Input() item: Customer;

  @Output() delete = new EventEmitter<string>();

  ngOnInit() {
  }

  deleteMe() {
    this.delete.emit(this.item._id);
  }

}
