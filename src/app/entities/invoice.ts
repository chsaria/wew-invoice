import { LineItem } from "./lineitem";


/* Client-model for an invoice */

export interface Invoice {
    _id: string;
    InvoiceNumber: string;
    Comment: string;
    CustomerReference: string;
    Discount: number;
    Customer_id: string;
    CreatedAtUtc: Date;
    ModifiedAtUtc: Date;
    PaidAtUtc: Date;
    CancelledAtUtc: Date;
    LineItems: LineItem[];
}
