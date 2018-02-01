import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../entities/invoice';

@Injectable()
export class InvoiceService {

    constructor(private http: HttpClient) { }

    /* GET all (filtered) invoices */
    public find(name: string): Observable<Invoice[]> {

        const url = '/invoice';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        const params = new HttpParams()
                                .set('name', name);

        return this
                .http
                .get<Invoice[]>(url, {headers, params});

    }

    public findById(id: string): Observable<Invoice> {

        const url = '/invoice/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                                .set('id', id);*/

        return this
                .http
                .get<Invoice>(url, {headers});
    }

    public create(invoiceToSave: Invoice): Observable<Invoice> {

        const url = '/invoice';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .post<Invoice>(url, invoiceToSave, {headers});
    }

    public update(invoiceToSave: Invoice): Observable<Invoice> {

        const id = invoiceToSave._id;

        const url = '/invoice/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', invoiceToSave.Id);*/

        return this
                .http
                .put<Invoice>(url, invoiceToSave, {headers});
    }

    public delete(id: string) {

        const url = '/invoice/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', id);*/

        return this
                .http
                .delete(url, {headers});
    }
}
