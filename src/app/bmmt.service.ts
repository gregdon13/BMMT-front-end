import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './models/transaction';
import {MoneyAccount} from './models/moneyaccount';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BmmtService {

  public account = [];
  singleAccount: MoneyAccount;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private readonly mainUrl: string;

  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:8080';
  }

  // transaction methods
  findAllTransactions(): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/all`);
  }

  findUserTransactions(userId): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/user/${userId}`);
  }

  findAccountTransactions(accountNumber): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/account/${accountNumber}`);
  }

  createNewTransaction(transaction: Transaction): Observable<any> {
    const body = JSON.stringify(transaction);
    return this.http.post(`${this.mainUrl}/transaction`, body);
  }


  // account methods

  userSingleAccount(userId: number, accountName: string): Observable<MoneyAccount> {
    return this.http.get<MoneyAccount>(`${this.mainUrl}/account/user/${userId}/${accountName}`);
  }

  createAccount(moneyAccount: MoneyAccount): Observable<any> {
    const body = JSON.stringify(moneyAccount);
    return this.http.post(`${this.mainUrl}/account`, body);
  }

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/all`);
  }

  getAccountByNumber(accountNumber): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/number/${accountNumber}`);
  }

  getAccountByUser(userId): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/user/${userId}`);
  }

  depositFunds(amount, accountNumber): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/deposit/${accountNumber}`, amount);
  }

  withdrawFunds(accountNumber, account: MoneyAccount): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/withdraw/${accountNumber}`, account, this.httpOptions);
  }

  transferFunds(amount, accountOne, accountTwo): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/transfer/${accountOne}/${accountTwo}`, amount);
  }

  deleteAccount(accountNumber): Observable<any> {
    return this.http.delete(`${this.mainUrl}/delete/${accountNumber}`);
  }

  // FAQ methods

  getAllFAQs(): Observable<any> {
    return this.http.get(`${this.mainUrl}/faq/all`);
  }

  getFAQById(ID: number): Observable<any> {
    return this.http.get(`${this.mainUrl}/faq/${ID}`);
  }
}
