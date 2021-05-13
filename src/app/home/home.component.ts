import { Component, OnInit } from '@angular/core';
import {BmmtService} from '../bmmt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number;

  constructor(private allService: BmmtService) { }

  ngOnInit(): void {
    this.allService.currentUser.subscribe(id => this.userId = id);
  }

  print(): void {
    console.log(this.userId);
  }

  getChecking(): void {
    this.allService.userSingleAccount(this.userId, 'CHECKING')
      .subscribe(account => this.allService.checking = account);
  }
}
