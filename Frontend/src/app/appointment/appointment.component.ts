import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment = new Appointment();
  msg = "";
  constructor(private _service:AppointmentService, private _router: Router) { }
  
  ngOnInit(): void {
  }

  registerAppointment(){
    this._service.registerAppointmentFromRemote(this.appointment).subscribe(
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
