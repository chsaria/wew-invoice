import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../../entities/invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.css'],
  providers: [InvoiceService]
})
export class InvoiceSearchComponent implements OnInit {

  searchText: string = '';

  invoices: Invoice[] = [];

  selectedInvoice: Invoice;

  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.invoiceService
      .find(this.searchText)
      .subscribe(
        (invoices) => {
          this.invoices = invoices;
        },
        (errResp) => {
          console.error('Error loading invoices', errResp);
        }
      );
  }

  select(t: Invoice): void {
    this.selectedInvoice = t;
  }

  deleteInvoice(invoice_id: string): void {
    this.invoiceService
    .delete(invoice_id)
    .subscribe(
      (success) => {
        for (let i = 0; i < this.invoices.length; i++) {
          if (this.invoices[i]._id === invoice_id) {
            this.invoices.splice(i, 1);
            break;
          }
        }
      },
      (errResp) => {
        console.error('Error deleting invoice', errResp);
      }
    );
  }

  delete(event) {
    this.deleteInvoice(event);
  }

  new(): void {
    this.router.navigate(['/invoices/new']);
  }
}
