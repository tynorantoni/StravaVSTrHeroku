import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
    selector: 'strava-component',
    templateUrl: 'components/strava/strava.component.html',
    styleUrls: ['components/strava/strava.component.css']
})
export class StravaComponent {
    constructor() {}
}