import { Component, OnInit } from '@angular/core';
import {BmmtService} from '../bmmt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private allService: BmmtService) { }

  ngOnInit(): void {
    this.allService.findByUserName('GREGDON13').subscribe(user => this.allService.currentUser = user);
    this.allService.userSingleAccount(this.allService.currentUser.ID, 'CHECKING')
      .subscribe(account => this.allService.checking = account);
    this.allService.userSingleAccount(this.allService.currentUser.ID, 'SAVINGS')
      .subscribe(account => this.allService.savings = account);
    this.allService.userSingleAccount(this.allService.currentUser.ID, 'INVESTMENT')
      .subscribe(account => this.allService.savings = account);
  }

}
