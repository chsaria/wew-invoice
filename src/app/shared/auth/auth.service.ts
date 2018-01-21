import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    public token: string;

    constructor(private http: HttpClient) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {

        const url = '/auth/login';

        const headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        const loginData = {
            UserName: username,
            Password: password
        };

        return this.http.post(url, loginData, {headers})
        .map((response: Response) => {
            const token = response.json() && response.json().token;
            if (token) {
                this.token = token;
                localStorage.setItem('currenUser', JSON.stringify({username: username, token: token}));
                return true;
            } else {
                return false;
            }
        });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
