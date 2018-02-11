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
var strava_service_1 = require("../../strava.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var StravaComponent = /** @class */ (function () {
    //  stravaActivitiesJson: string;
    //  objActivities:StravaUserModule;
    function StravaComponent(stravaServ) {
        this.stravaServ = stravaServ;
    }
    StravaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stravaServ.getUser().subscribe(function (data) {
            _this.stravaUserJson = JSON.stringify(data);
            _this.objUser = JSON.parse(_this.stravaUserJson);
        });
        this.stravaServ.getBike().subscribe(function (data) {
            _this.stravaBikeJson = JSON.stringify(data);
            _this.objBike = JSON.parse(_this.stravaBikeJson);
        });
        //     this.stravaServ.getActivities().subscribe(data=>{
        //      this.stravaActivitiesJson = JSON.stringify(data);
        //      this.objActivities = JSON.parse(this.stravaActivitiesJson);
        //    });
    };
    StravaComponent = __decorate([
        core_1.Component({
            selector: 'strava-component',
            templateUrl: 'components/strava/strava.component.html',
            styleUrls: ['components/strava/strava.component.css']
        }),
        __metadata("design:paramtypes", [strava_service_1.StravaService])
    ], StravaComponent);
    return StravaComponent;
}());
exports.StravaComponent = StravaComponent;
//# sourceMappingURL=strava.component.js.map