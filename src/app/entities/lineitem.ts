
import { Position } from './position';
/* Client-model for an invoice */

export interface LineItem {
    _id: string;
    Comment: string;
    NetPrice: number;
    TaxPercentage: number;
    Count: number;
    Invoice_id: string;
    Position: Position;
    Position_id: string;
    CreatedAtUtc: Date;
    ModifiedAtUtc: Date;
}
