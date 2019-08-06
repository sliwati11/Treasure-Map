import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    // Define API
    apiURL = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    // HttpClient API get() method => Fetch employees list
  /*   getAllUser(): Observable<account> {
        return this.http.get<Employee>(this.apiURL + '/account')
        .pipe(
        retry(1),
        catchError(this.handleError)
        )
    } */


    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

     // HttpClient API post() method => Create employee
/*     createAccount(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/account', JSON.stringify(employee), this.httpOptions)
    .pipe(
        retry(1),
        catchError(this.handleError)
    )
    } */ 

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}