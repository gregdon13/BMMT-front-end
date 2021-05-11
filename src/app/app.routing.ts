import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { HelpComponent } from './help';
import {CheckingAcctComponent} from './checking-acct';
import {SavingsAcctComponent} from './savings-acct';
import {InvestmentAcctComponent} from './investment-acct';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import { TransferComponent } from './transfer';
import { DevPortalComponent } from "./dev-portal/dev-portal.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent},
  { path: 'checking', component: CheckingAcctComponent},
  { path: 'savings', component: SavingsAcctComponent},
  { path: 'investment', component: InvestmentAcctComponent},
  { path: 'Create-Profile', component: UserProfileComponent},
  { path: 'transfer', component: TransferComponent },
  { path: 'devPage', component: DevPortalComponent  },
  { path: 'KYC', component: UserProfileComponent},
  // otherwise redirects to home
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
