import { Tenant } from './tenant';

/* Client-model for a position */

export interface Position {
  _id: string;
  Short: string;
  Name: string;
  NetDefaultPrice: number;
  TaxPercentage: number;
  DefaultCount: number;
  Unit: string;
  Tenant: Tenant;
  CreatedAtUtc: Date;
  ModifiedAtUtc: Date;
}
