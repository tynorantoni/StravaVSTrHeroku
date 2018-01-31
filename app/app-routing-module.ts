import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { BikeManagerComponent } from "./components/bikeManager/bikeManager.component";
import { MetarComponent } from "./components/metar/metar.component";
import { PageNotFoundComponent } from "./components/pageNotFound/page-not-found.component";
import {NgModule} from '@angular/core';

import {RouterModule, Routes, Route} from '@angular/router';



export const routes: Route[] = [
    {path: '', component: AppComponent},
  {path: 'bikemanager', component: BikeManagerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });


//const appRoutes: Routes = [
//  {path: '', component: AppComponent},
//  {path: 'bikemanager', component: BikeManagerComponent},
//  {path: 'about', component: AboutComponent},
//  {path: 'not-found', component: PageNotFoundComponent},
//  {path: '**', redirectTo: '/not-found'}
//];
//
//@NgModule({
//  imports: [
//    RouterModule.forRoot(appRoutes)
//  ],
//  exports: [
//    RouterModule
//  ]
//})
//export class AppRoutingModule {
//
//
//}
