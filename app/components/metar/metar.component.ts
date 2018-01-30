import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'metar-component',
    templateUrl: 'components/metar/metar.component.html',
    styleUrls: ['components/metar/metar.component.css']
})
export class MetarComponent {
    
    constructor(http: Http) {}
}