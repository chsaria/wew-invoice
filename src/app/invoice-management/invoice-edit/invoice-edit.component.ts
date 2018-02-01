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
  invoice: Invoice = {
    _id: '',
    InvoiceNumber: '',
    Customer: null,
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

  errors: string;
  // currentAddPosition: Position;
  currentAddPositionId: string;

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
        this.id = params['id'];

        this.customerService
        .find('')
        .subscribe(
          (customers) => {
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
          return;
        } else if (this.id === 'new') {
        } else {
          this.invoiceService.findById(this.id).subscribe(
            invoice => { this.invoice = invoice; this.errors = ''; },
            error => { this.errors = 'Error loading invoice'; }
          );
        }
      }
    );
  }

  getItemSum(lineItem: LineItem) {
    if (lineItem === null) {
      return 0;
    }

    let tax = 100;

    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i]._id === lineItem.Position_id) {
        tax = this.positions[i].TaxPercentage + 100;
        break;
      }
    }
    console.log(lineItem.NetPrice);
    console.log(tax);
    return lineItem.NetPrice * (tax / 100) * lineItem.Count;
  }

  addItem() {
    if (this.invoice !== null && this.currentAddPositionId !== null && this.currentAddPositionId !== '') {
      if (this.invoice.LineItems === undefined || this.invoice.LineItems === null) {
        this.invoice.LineItems = [];
      } else {
        for (let i = 0; i < this.invoice.LineItems.length; i++) {
          if (this.invoice.LineItems[i].Position_id === this.currentAddPositionId) {
            this.invoice.LineItems[i].Count += 1;
            return;
          }
        }
      }
      console.log(this.currentAddPositionId);
      let pos = null;
      for (let i = 0; i < this.positions.length; i++) {
        if (this.positions[i]._id === this.currentAddPositionId) {
          pos = this.positions[i];
          break;
        }
      }
      this.invoice.LineItems.push({
        _id: '',
        Comment: '',
        NetPrice: pos.NetDefaultPrice,
        TaxPercentage: pos.TaxPercentage,
        Count: pos.DefaultCount,
        Position: pos,
        Invoice_id: this.invoice._id,
        Position_id: this.currentAddPositionId,
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
        this.router.navigate(['/invoices']);
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
        this.router.navigate(['/invoices']);
      },
      err => {
        this.errors = 'Error saving invoice';
      }
    );
  }
}
