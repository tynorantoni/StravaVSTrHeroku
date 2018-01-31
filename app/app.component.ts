import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({

  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor(private  router: Router,
              private  route: ActivatedRoute) {}
}
