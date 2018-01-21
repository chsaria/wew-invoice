import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    /* GET all (filtered) users */
    public find(name: string): Observable<User[]> {

        const url = '/user';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        const params = new HttpParams()
                                .set('name', name);

        return this
                .http
                .get<User[]>(url, {headers, params});

    }

    public findById(id: string): Observable<User> {

        const url = '/user/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                                .set('id', id);*/

        return this
                .http
                .get<User>(url, {headers});
    }

    public create(userToSave: User): Observable<User> {

        const url = '/user';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .post<User>(url, userToSave, {headers});
    }

    public update(userToSave: User): Observable<User> {

        const id = userToSave._id;

        const url = '/user/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', userToSave.Id);*/

        return this
                .http
                .put<User>(url, userToSave, {headers});
    }

    public delete(id: string) {

        const url = '/user/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', id);*/

        return this
                .http
                .delete(url, {headers});
    }

}