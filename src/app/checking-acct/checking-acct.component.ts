import { Component, OnInit, Input} from '@angular/core';
import { BmmtService } from '../bmmt.service';
import {MoneyAccount} from '../models/moneyaccount';
import { Router } from '@angular/router';



@Component({
   selector: 'app-checking-acct',
  templateUrl: './checking-acct.component.html',
   styleUrls: ['./checking-acct.component.css']
})
export class CheckingAcctComponent implements OnInit{
  checkAcct: MoneyAccount;
  accountNum: number;
  accountBalance: number;
  transactions: any[];
  url: string;
  limit = 5;

  constructor(private router: Router, private accountService: BmmtService) {
  }



  ngOnInit(): void {
    this.checkAcct = new MoneyAccount();
    this.accountService.userSingleAccount(23, 'CHECKING').subscribe(account => this.checkAcct = account);
    this.getCheckingTransactions();
  }

  // WILL NEED TO FIGURE OUT HOW TO GET INFO FROM USER TO INPUT IN METHODS
  // CURRENTLY IT'S HARDCODED

  withdraw(): void {
    this.accountService.withdrawFunds(987654321, this.checkAcct);
  }

  showInto(): void {
    console.log(this.checkAcct);
  }

  getCheckingBalance(): void {
    this.accountService.userSingleAccount(23, 'CHECKING')
     .subscribe(account => this.accountBalance = account.balance);
  }

  getCheckingNumber(): void {
    this.accountService.userSingleAccount(23, 'CHECKING')
     .subscribe(account =>
         this.accountNum = account.accountNumber % 1000);
  }

  getCheckingTransactions(): void {
    this.accountService.findAccountTransactions(987654321)
      .subscribe(list => this.transactions = list);
  }

  showMoreItems(): void {
    if (this.limit < 25) {
      this.limit += 5;
    }
  }

  showLessItems(): void {
    if (this.limit > 5){
      this.limit -= 5;
    }
  }

  getCheckingAccount(): void {
    this.accountService.userSingleAccount(23, 'CHECKING').subscribe(account => this.checkAcct = account);
  }
}
