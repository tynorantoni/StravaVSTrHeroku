"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
exports.routes = [
    { path: '', pathMatch: 'full', component: app_component_1.AppComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map