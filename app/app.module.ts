import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { MetarComponent } from "./components/metar/metar.component";
import { StravaComponent } from "./components/strava/strava.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        StravaComponent,
        MetarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
