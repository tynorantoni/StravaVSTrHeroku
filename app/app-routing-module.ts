import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { BikeManagerComponent } from "./components/bikeManager/bikeManager.component";
import { PageNotFoundComponent } from "./components/pageNotFound/page-not-found.component";
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: '/bikemanager', component: BikeManagerComponent},
  {path: '/about', component: AboutComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,   {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
