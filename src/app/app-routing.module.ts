import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import {ModuleWithProviders} from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];
export const appRoutingProviders:any[]=[];
// export const routing:ModuleWithProviders=RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
