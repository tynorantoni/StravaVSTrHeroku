import {MetarService} from "../../metar.service";
import {MetarModule} from "./metar.module";
import {Component, OnInit, OnChanges} from '@angular/core';
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';

@Component({
  selector: 'metar-component',
  templateUrl: 'components/metar/metar.component.html',
  styleUrls: ['components/metar/metar.component.css']
})
export class MetarComponent implements OnInit, OnChanges {

  json: string;
  obj: MetarModule;


  constructor(private metarServ: MetarService) {}

  ngOnInit() {
    this.metarServ.getMetarDecoded().subscribe(data => {
      this.json = JSON.stringify(data);
      this.obj = JSON.parse(this.json);
    });

  }

  ngOnChanges(){
    this.ngOnInit();
    
  }
  
}