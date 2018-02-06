import { MetarService } from "../../metar.service";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';

@Component({
    selector: 'metar-component',
    templateUrl: 'components/metar/metar.component.html',
    styleUrls: ['components/metar/metar.component.css']
})
export class MetarComponent implements OnInit {
  
  metar: String;
  
  

     constructor(private metarServ: MetarService) {}
  
  ngOnInit(){
    this.metarServ.getAll().subscribe(data=>{
      this.metar = JSON.stringify(data);
    });
   
  }
  
}