import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyOwnerDashboardComponent } from './company-owner-dashboard/company-owner-dashboard.component';

import {RegisterComponent} from './register/register.component';
import {CompanyTempComponent} from './company-temp/company-temp.component';
import { CompanyHomeDashboardComponent } from './company-home-dashboard/company-home-dashboard.component';
import {CompanyOwnerProfileComponent} from './company-owner-profile/company-owner-profile.component';
import {CompanyHomeTempComponent} from './company-home-temp/company-home-temp.component';



const routes: Routes = [
  //  { path: '', redirectTo: '/dashboard' , pathMatch: 'full'},
  // { path: '', redirectTo: 'owner', pathMatch: 'full' },

  {   path: '' , component : CompanyOwnerDashboardComponent ,

    children: [
      {    path: 'registation', component: RegisterComponent},
      {    path: 'dashbord', component: CompanyOwnerDashboardComponent},
      {     path : 'temp' , component: CompanyTempComponent},
    ]
  },
  {   path: 'home' , component : CompanyHomeDashboardComponent ,

    children : [
      {     path : '' , component: CompanyHomeTempComponent},
      {  path : 'profile' , component : CompanyOwnerProfileComponent }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyOwnerRoutingModule { }
