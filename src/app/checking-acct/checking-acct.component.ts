import { Component, OnInit} from '@angular/core';
import { BmmtService } from '../bmmt.service';



@Component({
   selector: 'app-checking-acct',
  templateUrl: './checking-acct.component.html',
   styleUrls: ['./checking-acct.component.css']
})
export class CheckingAcctComponent implements OnInit{
  accountNum: number;
  accountBalance: number;
  transactions: any[];
  limit = 5;
  checkAcct = [];

  constructor(private accountService: BmmtService) {
    // this.getCheckingBalance();
    // this.getCheckingNumber();
    // this.getCheckingTransactions();
  }


  ngOnInit(): void {
    this.withdraw();
    this.getCheckingBalance();
    this.getCheckingNumber();
    this.getCheckingTransactions();
  }

  // WILL NEED TO FIGURE OUT HOW TO GET INFO FROM USER TO INPUT IN METHODS
  // CURRENTLY IT'S HARDCODED

  withdraw(): void {
    this.accountService.withdrawFunds(10, 987654321);
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

}
