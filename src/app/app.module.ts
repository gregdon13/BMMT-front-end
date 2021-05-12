import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckingAccountComponent } from './checking-account/checking-account.component';
import { DevPortalComponent } from './dev-portal/dev-portal.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { InvestmentAccountComponent } from './investment-account/investment-account.component';
import { LoginComponent } from './login/login.component';
import { ModelsComponent } from './models/models.component';
import { SavingsAccountComponent } from './savings-account/savings-account.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckingAccountComponent,
    DevPortalComponent,
    HelpComponent,
    HomeComponent,
    InvestmentAccountComponent,
    LoginComponent,
    ModelsComponent,
    SavingsAccountComponent,
    TransferComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
