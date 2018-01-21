import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Tenant } from '../entities/tenant';

@Injectable()
export class TenantService {

    constructor(private http: HttpClient) { }

    /* GET all (filtered) tenants */
    public find(name: string): Observable<Tenant[]> {

        const url = '/tenant';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        const params = new HttpParams()
                                .set('name', name);

        return this
                .http
                .get<Tenant[]>(url, {headers, params});

    }

    public findById(id: string): Observable<Tenant> {

        const url = '/tenant/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                                .set('id', id);*/

        return this
                .http
                .get<Tenant>(url, {headers});
    }

    public create(tenantToSave: Tenant): Observable<Tenant> {

        const url = '/tenant';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .post<Tenant>(url, tenantToSave, {headers});
    }

    public update(tenantToSave: Tenant): Observable<Tenant> {

        const id = tenantToSave._id;

        const url = '/tenant/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', tenantToSave.Id);*/

        return this
                .http
                .put<Tenant>(url, tenantToSave, {headers});
    }

    public delete(id: string) {

        const url = '/tenant/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', id);*/

        return this
                .http
                .delete(url, {headers});
    }
}
