import { Injectable } from '@angular/core';
import {MoneyAccount} from './models/money-account';
import {UserProfile} from './models/user-profile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class BmmtService {
  checking: MoneyAccount;
  savings: MoneyAccount;
  investment: MoneyAccount;
  currentUser: UserProfile;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  readonly mainUrl: string;

  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:8080';
  }

  // account methods

  createAccount(moneyAccount: MoneyAccount): Observable<MoneyAccount> {
    const body = JSON.stringify(moneyAccount);
    return this.http.post<MoneyAccount>(`${this.mainUrl}/account`, body);
  }

  deleteAccount(accountNumber: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.mainUrl}/delete/${accountNumber}`);
  }

  userSingleAccount(userId: number, accountName: string): Observable<MoneyAccount> {
    return this.http.get<MoneyAccount>(`${this.mainUrl}/account/user/${userId}/${accountName}`);
  }

  withdrawFunds(accountNumber: number, amount: number): Observable<MoneyAccount> {
    return this.http.put<MoneyAccount>(`${this.mainUrl}/account/withdraw/${accountNumber}/${amount}`, this.httpOptions);
  }

  depositFunds(amount: number, accountNumber: number): Observable<MoneyAccount> {
    return this.http.put<MoneyAccount>(`${this.mainUrl}/account/deposit/${accountNumber}/${amount}`, this.httpOptions);
  }

  transferFunds(amount: number, accountOne: number, accountTwo: number): Observable<MoneyAccount> {
    return this.http.put<MoneyAccount>(`${this.mainUrl}/account/transfer/${accountOne}/${accountTwo}/${amount}`, this.httpOptions);
  }

  // transaction methods

  findAllTransactions(): Observable<Iterable<Transaction>> {
    return this.http.get<Iterable<Transaction>>(`${this.mainUrl}/transaction/all`);
  }

  findUserTransactions(userId: number): Observable<Iterable<Transaction>> {
    return this.http.get<Iterable<Transaction>>(`${this.mainUrl}/transaction/user/${userId}`);
  }

  findAccountTransactions(accountNumber: number): Observable<Iterable<Transaction>> {
    return this.http.get<Iterable<Transaction>>(`${this.mainUrl}/transaction/account/${accountNumber}`);
  }

  createNewTransaction(transaction: Transaction): Observable<Transaction> {
    const body = JSON.stringify(transaction);
    return this.http.post<Transaction>(`${this.mainUrl}/transaction`, body);
  }

  // user methods

  findByUserName(userName: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.mainUrl}/user/${userName}`);
  }
}
