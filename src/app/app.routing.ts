import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { HelpComponent } from './help';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent},

  // otherwise redirects to home
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
