import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
    {path:'about', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'**', component:NotFoundPageComponent},
];
