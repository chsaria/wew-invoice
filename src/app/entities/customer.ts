import { Tenant } from './tenant';


/* Client-model for a customer */

export interface Customer {
  _id: string;
  Name: string;
  Address1: string;
  Address2: string;
  Address3: string;
  City: string;
  Zipcode: string;
  Phonenumber: string;
  Tenant: Tenant;
  CreatedAtUtc: Date;
  ModifiedAtUtc: Date;
}
