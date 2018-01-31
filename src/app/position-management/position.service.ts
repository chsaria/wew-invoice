import { Position } from './../entities/position';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class PositionService {

    constructor(private http: HttpClient) { }

    /* GET all (filtered) position */
    public find(name: string): Observable<Position[]> {

        const url = '/position';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        const params = new HttpParams()
                                .set('name', name);

        return this
                .http
                .get<Position[]>(url, {headers, params});

    }

    public findById(id: string): Observable<Position> {

        const url = '/position/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                                .set('id', id);*/

        return this
                .http
                .get<Position>(url, {headers});
    }

    public create(positionToSave: Position): Observable<Position> {

        const url = '/position';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        return this
                .http
                .post<Position>(url, positionToSave, {headers});
    }

    public update(positionToSave: Position): Observable<Position> {

        const id = positionToSave._id;

        const url = '/position/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', positionToSave.Id);*/

        return this
                .http
                .put<Position>(url, positionToSave, {headers});
    }

    public delete(id: string) {

        const url = '/position/' + id;

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        /*const params = new HttpParams()
                            .set('id', id);*/

        return this
                .http
                .delete(url, {headers});
    }
}

