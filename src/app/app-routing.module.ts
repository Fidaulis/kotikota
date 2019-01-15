import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {KotikotaLoginComponent} from "./kotikota-login/kotikota-login.component";
import {AppComponent} from './app.component';
import {KotikotaFrontComponent} from "./kotikota-front/kotikota-front.component";

const appRoutes: Routes = [
  { path: 'login', component: KotikotaLoginComponent },
  { path: '',component:KotikotaFrontComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
