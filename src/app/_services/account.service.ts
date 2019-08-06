import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../_models/account';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
    providedIn:'root'
})
export class AccountService {
    private accountUrl = 'http://localhost:8080/api/accounts';
    
    constructor(
        private http: HttpClient
    ){}

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.accountUrl);
    }

    
}
