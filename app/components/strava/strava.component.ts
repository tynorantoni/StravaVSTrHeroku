import { StravaService } from "../../strava.service";
import { StravaUserModule } from "./stravaUser.module";
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
    selector: 'strava-component',
    templateUrl: 'components/strava/strava.component.html',
    styleUrls: ['components/strava/strava.component.css']
})
export class StravaComponent implements OnInit {
  
  stravaUserJson: string;
  objUser:StravaUserModule;
  
  stravaBikeJson: string;
  objBike:StravaUserModule;
  
//  stravaActivitiesJson: string;
//  objActivities:StravaUserModule;
  
  
    constructor(private stravaServ: StravaService) {}
  
  ngOnInit(){
    this.stravaServ.getUser().subscribe(data=>{
      this.stravaUserJson = JSON.stringify(data);
      this.objUser = JSON.parse(this.stravaUserJson);
    });
    
    this.stravaServ.getBike().subscribe(data=>{
      this.stravaBikeJson = JSON.stringify(data);
      this.objBike = JSON.parse(this.stravaBikeJson);
    });
    
//     this.stravaServ.getActivities().subscribe(data=>{
//      this.stravaActivitiesJson = JSON.stringify(data);
//      this.objActivities = JSON.parse(this.stravaActivitiesJson);
//    });
   
  }
  
  
}