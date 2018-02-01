import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../entities/customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  /* GET all (filtered) customers */
  public find(name: string): Observable<Customer[]> {

    const url = '/customer';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('name', name);

    return this
      .http
      .get<Customer[]>(url, { headers, params });

  }

  public findById(id: string): Observable<Customer> {

    const url = '/customer/' + id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .http
      .get<Customer>(url, {headers});
  }

  public create(customerToSave: Customer): Observable<Customer> {

    const url = '/customer';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .http
      .post<Customer>(url, customerToSave, {headers});
  }

  public update(customerToSave: Customer): Observable<Customer> {

    const id = customerToSave._id;

    const url = '/customer/' + id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .http
      .put<Customer>(url, customerToSave, {headers});
  }

  public delete(id: string) {

    const url = '/customer/' + id;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
      .http
      .delete(url, {headers});
  }
}
