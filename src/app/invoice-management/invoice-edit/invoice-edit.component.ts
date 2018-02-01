import { InvoiceSearchComponent } from './../invoice-search/invoice-search.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoice } from '../../entities/invoice';
import { Position } from '../../entities/position';
import { InvoiceService } from '../invoice.service';
import { CustomerService } from '../../customer-management/customer.service';
import { PositionService } from '../../position-management/position.service';
import { Customer } from '../../entities/customer';
import { DatePipe } from '@angular/common';
import { LineItem } from '../../entities/lineitem';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  id: string;
  invoice: Invoice;
  errors: string;
  currentAddPosition: Position;

  positions: Position[] = [];
  customers: Customer[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private positionService: PositionService,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('1');
        this.id = params['id'];

        console.log('2');

        this.customerService
        .find('')
        .subscribe(
          (customers) => {
            console.log('got customers');
            console.log(customers);
            this.customers = customers;
          },
          (errResp) => {
            console.error('Error loading customers', errResp);
          }
        );

        this.positionService
        .find('')
        .subscribe(
          (positions) => {
            this.positions = positions;
          },
          (errResp) => {
            console.error('Error loading positions', errResp);
          }
        );

        if (this.id === '') {
          console.log('3');
          return;
        } else if (this.id === 'new') {
          console.log('4');
          this.invoice = {
            _id: '',
            InvoiceNumber: '',
            Customer_id: '',
            CustomerReference: '',
            Comment: '',
            CreatedAtUtc: null,
            ModifiedAtUtc: null,
            LineItems: [],
            PaidAtUtc: null,
            CancelledAtUtc: null,
            Discount: 0
          };
          console.log('5');
        } else {
          console.log('6');
          this.invoiceService.findById(this.id).subscribe(
            invoice => { console.log('7'); this.invoice = invoice; this.errors = ''; },
            error => { console.log('8'); this.errors = 'Error loading invoice'; }
          );
        }
      }
    );
  }

  getItemSum(lineItem: LineItem) {
    if (lineItem === null) {
      return 0;
    }

    let tax = 1;

    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i]._id === lineItem.Position_id) {
        tax = this.positions[i].TaxPercentage + 1;
        break;
      }
    }
    return lineItem.NetPrice * tax * lineItem.Count;
  }

  addItem() {
    if (this.invoice !== null && this.currentAddPosition !== null) {
      for (let i = 0; i < this.invoice.LineItems.length; i++) {
        if (this.invoice.LineItems[i].Position_id === this.currentAddPosition._id) {
          this.invoice.LineItems[i].Count += 1;
          return;
        }
      }
      console.log(this.currentAddPosition);
      this.invoice.LineItems.push({
        _id: '',
        Comment: '',
        NetPrice: this.currentAddPosition.NetDefaultPrice,
        TaxPercentage: this.currentAddPosition.TaxPercentage,
        Count: this.currentAddPosition.DefaultCount,
        Position: this.currentAddPosition,
        Invoice_id: this.invoice._id,
        Position_id: this.currentAddPosition._id,
        CreatedAtUtc: null,
        ModifiedAtUtc: null
      });
      console.log(this.invoice);
    }
  }

  save() {
    if (this.id === 'new') {
      this.createNew();
    } else {
      this.update();
    }
  }

  createNew() {
    this.invoiceService.create(this.invoice).subscribe(
      invoice => {
        this.invoice = invoice;
        this.errors = 'Creating was successful!';
      },
      err => {
        this.errors = 'Error saving invoice';
      }
    );
  }

  update() {
    this.invoiceService.update(this.invoice).subscribe(
      invoice => {
        this.invoice = invoice;
        this.errors = 'Updating was successful!';
      },
      err => {
        this.errors = 'Error saving invoice';
      }
    );
  }
}
