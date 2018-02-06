
import { routing } from "./app-routing-module";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { BikeManagerComponent } from "./components/bikeManager/bikeManager.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

import { AboutComponent } from "./components/about/about.component";
import { MetarComponent } from "./components/metar/metar.component";
import { PageNotFoundComponent } from "./components/pageNotFound/page-not-found.component";
import { StravaComponent } from "./components/strava/strava.component";

import { MetarService } from "./metar.service";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http" ;



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
//        JsonpModule,
        routing
       
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent,
        StravaComponent,
        MetarComponent,
        BikeManagerComponent,
        PageNotFoundComponent
    ],
    providers: [MetarService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
