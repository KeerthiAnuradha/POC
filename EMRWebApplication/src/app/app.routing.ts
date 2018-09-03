import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Home', component: HomeComponent }
];
export const Routing = RouterModule.forRoot(appRoutes,{useHash: true});