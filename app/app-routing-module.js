"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_component_1 = require("./components/about/about.component");
var bikeManager_component_1 = require("./components/bikeManager/bikeManager.component");
var page_not_found_component_1 = require("./components/pageNotFound/page-not-found.component");
var strava_component_1 = require("./components/strava/strava.component");
var router_1 = require("@angular/router");
exports.routes = [
    { path: '', component: strava_component_1.StravaComponent },
    { path: 'bikemanager', component: bikeManager_component_1.BikeManagerComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: false });
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
//# sourceMappingURL=app-routing-module.js.map