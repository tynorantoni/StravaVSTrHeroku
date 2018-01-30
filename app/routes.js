"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
//import { HomeComponent } from './components/home/home.component';
//import { AboutComponent } from './components/about/about.component';
exports.routes = [
    { path: '', pathMatch: 'full', component: app_component_1.AppComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map