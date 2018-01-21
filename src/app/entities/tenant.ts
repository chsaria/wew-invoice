
/* Client-model for a tenant */

export interface Tenant {
    _id: string;
    Name: string;
    InvoiceNumberScheme: string;
    TaxIdentificationNumber: string;
    Address1: string;
    Address2: string;
    Address3: string;
    City: string;
    Zipcode: string;
    Phonenumber: string;
    IBAN: string;
    BIC: string;
    LogoUrl: string;
    CreatedAtUtc: Date;
    ModifiedAtUtc: Date;
}
