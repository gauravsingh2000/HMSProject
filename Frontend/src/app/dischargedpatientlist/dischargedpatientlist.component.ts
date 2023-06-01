import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dischargedpatientlist } from '../models/dischargedpatientlist';


import { DischargedpatientlistService } from '../services/dischargedpatientlist.service';

@Component({
  selector: 'app-dischargedpatientlist',
  templateUrl: './dischargedpatientlist.component.html',
  styleUrls: ['./dischargedpatientlist.component.css']
})
export class DischargedpatientlistComponent implements OnInit {

  dischargedpatient:Dischargedpatientlist[];
  getDischargedPatient: any;
  constructor(private dischargedpatientlistservice: DischargedpatientlistService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDischargedPatients();
  }
  private getDischargedPatients()
  {
    this.dischargedpatientlistservice. registerDishchargedPatientFromRemote().subscribe(data =>
      {
        this.dischargedpatient=data;
        console.log(data)
      });
  }

}
