import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'q1', component: Q1Component},
  { path: 'q2', component: Q2Component},
  { path: 'q3', component: Q3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
