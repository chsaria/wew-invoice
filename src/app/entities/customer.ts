
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
  CreatedAtUtc: Date;
  ModifiedAtUtc: Date;
}
