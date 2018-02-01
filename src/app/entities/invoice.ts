import { LineItem } from './lineitem';
import { Customer } from './customer';


/* Client-model for an invoice */

export interface Invoice {
    _id: string;
    InvoiceNumber: string;
    Comment: string;
    CustomerReference: string;
    Discount: number;
    Customer: Customer;
    Customer_id: string;
    CreatedAtUtc: Date;
    ModifiedAtUtc: Date;
    PaidAtUtc: Date;
    CancelledAtUtc: Date;
    LineItems: LineItem[];
}
