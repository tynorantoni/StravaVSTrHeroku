import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { BikeManagerComponent } from "./components/bikeManager/bikeManager.component";
import { MetarComponent } from "./components/metar/metar.component";
import { PageNotFoundComponent } from "./components/pageNotFound/page-not-found.component";
import { StravaComponent } from "./components/strava/strava.component";
import {NgModule} from '@angular/core';

import {RouterModule, Routes, Route} from '@angular/router';



export const routes: Route[] = [
    {path: '', component: StravaComponent},
  {path: 'bikemanager', component: BikeManagerComponent},
  {path: 'about', component: AboutComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

export const routing = RouterModule.forRoot(routes, { useHash: false });


