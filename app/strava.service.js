"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var StravaService = /** @class */ (function () {
    function StravaService(http) {
        this.http = http;
    }
    StravaService.prototype.getUser = function () {
        return this.http.get('https://stvstr.herokuapp.com/api/strava/user/get');
    };
    StravaService.prototype.getBike = function () {
        return this.http.get('https://stvstr.herokuapp.com/api/strava/bike/get');
    };
    StravaService.prototype.getActivities = function () {
        return this.http.get('https://stvstr.herokuapp.com/api/strava/activities/get');
    };
    StravaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StravaService);
    return StravaService;
}());
exports.StravaService = StravaService;
//# sourceMappingURL=strava.service.js.map