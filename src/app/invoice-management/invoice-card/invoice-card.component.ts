import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../entities/invoice';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  constructor() { }

  @Input() item: Invoice;

  @Output() delete = new EventEmitter<string>();

  sum = function() {
    console.log('sum called');
    if (this.item === null || this.item.LineItems === null) {
      console.log('sum returning null 0');
      return 0;
    }
    console.log(this.item);

    if (this.item === undefined || this.item.LineItems === undefined) {
      console.log('sum returning undefined 0');
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < this.item.LineItems.length; i++) {
      const curItem = this.item.LineItems[i];
      sum += (curItem.NetPrice * ((100 + curItem.TaxPercentage) / 100) * curItem.Count);
    }
    console.log('sum returning ' + sum);
    return sum;
  };

  deleteMe() {
    this.delete.emit(this.item._id);
  }

  ngOnInit() {
  }

}
