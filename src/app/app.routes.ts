import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent} 
];
