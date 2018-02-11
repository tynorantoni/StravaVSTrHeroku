"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_routing_module_1 = require("./app-routing-module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//import {JsonpModule } from '@angular/http';
var app_component_1 = require("./app.component");
var bikeManager_component_1 = require("./components/bikeManager/bikeManager.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var about_component_1 = require("./components/about/about.component");
var metar_component_1 = require("./components/metar/metar.component");
var page_not_found_component_1 = require("./components/pageNotFound/page-not-found.component");
var strava_component_1 = require("./components/strava/strava.component");
var metar_service_1 = require("./metar.service");
var strava_service_1 = require("./strava.service");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                //        JsonpModule,
                app_routing_module_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                strava_component_1.StravaComponent,
                metar_component_1.MetarComponent,
                bikeManager_component_1.BikeManagerComponent,
                page_not_found_component_1.PageNotFoundComponent,
            ],
            providers: [metar_service_1.MetarService, strava_service_1.StravaService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map