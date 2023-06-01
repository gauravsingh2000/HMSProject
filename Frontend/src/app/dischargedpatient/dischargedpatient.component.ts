import { Component, OnInit } from '@angular/core';
import { Dischargedpatient } from '../models/dischargedpatient';
import { DischargedpatientService } from '../services/dischargedpatient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dischargedpatient',
  templateUrl: './dischargedpatient.component.html',
  styleUrls: ['./dischargedpatient.component.css']
})
export class DischargedpatientComponent implements OnInit {

  dischargedpatient = new Dischargedpatient();
  msg = "";
  constructor(private _service:DischargedpatientService, private _router: Router) { }
  
  ngOnInit(): void {
  }

  registerDischargedpatient(){
    this._service.registerDischargedPatientFromRemote(this.dischargedpatient).subscribe(
      data => {
        console.log("Response received");
        alert("Registration Successful!");
        this._router.navigate(['/patienthomepage'])

      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
   
  }

}
