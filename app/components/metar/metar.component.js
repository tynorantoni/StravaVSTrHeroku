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
var metar_service_1 = require("../../metar.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var MetarComponent = /** @class */ (function () {
    function MetarComponent(metarServ) {
        this.metarServ = metarServ;
    }
    MetarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metarServ.getMetarDecoded().subscribe(function (data) {
            _this.json = JSON.stringify(data);
            _this.obj = JSON.parse(_this.json);
        });
    };
    MetarComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    MetarComponent = __decorate([
        core_1.Component({
            selector: 'metar-component',
            templateUrl: 'components/metar/metar.component.html',
            styleUrls: ['components/metar/metar.component.css']
        }),
        __metadata("design:paramtypes", [metar_service_1.MetarService])
    ], MetarComponent);
    return MetarComponent;
}());
exports.MetarComponent = MetarComponent;
//# sourceMappingURL=metar.component.js.map