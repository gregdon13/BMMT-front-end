import { Component, OnInit } from '@angular/core';
import {UserProfile} from '../models/user-profile';
import {BmmtService} from '../bmmt.service';
import {MoneyAccount} from '../models/money-account';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.css']
})
export class CheckingAccountComponent implements OnInit {
  id: number;
  checking: MoneyAccount;

  constructor(private allService: BmmtService) { }

  ngOnInit(): void {
    this.allService.currentUser.subscribe(id => {
      this.allService.userSingleAccount(id, 'CHECKING')
        .subscribe((data: MoneyAccount) => {
          this.checking = data;
        });
    });
  }

}
