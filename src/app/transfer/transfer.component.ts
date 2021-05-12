import { Component, Input, OnInit } from '@angular/core';
import {BmmtService} from '../bmmt.service';



@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accounts: any[];
  @Input() accountAction: string;
  accountFrom: string;
  accountTo: string;
  acctFromNum: number;
  acctToNum: number;
  actAmt: number;

  constructor(private accountService: BmmtService) {
    this.getUserAccounts();
  }

  ngOnInit(): void {
  }

  onSubmit(): number {
    return this.actAmt;
  }

  getAccountFromNumber(): number {
    console.log(this.accountFrom);
    let numAcct: number;
    this.accountService.userSingleAccount(23, this.accountFrom).subscribe(account => numAcct = account.accountNumber);
    console.log(numAcct);
    return numAcct;
  }

  getUserAccounts(): void {
    this.accountService.getAccountByUser(23).subscribe(list => this.accounts = list);
  }

  submitAction(): void {
    this.accountService.withdrawFunds(987654321, this.accounts[1]);
  }

}
