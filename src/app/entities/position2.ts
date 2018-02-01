
/* Client-model for an invoice */

export interface Position {
    _id: string;
    Short: string;
    Name: string;
    NetDefaultPrice: number;
    TaxPercentage: number;
    DefaultCount: number;
    Unit: string;
    CreatedAtUtc: Date;
    ModifiedAtUtc: Date;
}
