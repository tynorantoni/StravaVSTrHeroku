import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-not-found-component',
    templateUrl: 'component/pageNotFound/page-not-found.component.html',
    styleUrls: ['components/pageNotFound/page-not-found.component.css']
})
export class PageNotFoundComponent {
    constructor(http: Http) {}
}