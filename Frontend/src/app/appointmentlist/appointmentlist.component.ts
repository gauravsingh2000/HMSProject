import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointmentlist } from '../appointmentlist';
import { AppointmentlistService } from '../services/appointmentlist.service';


@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {

  appointments: Appointmentlist[];
  getDoctors: any;
  constructor(private appointmentlistservice: AppointmentlistService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  private getAppointments()
  {
    this.appointmentlistservice.registerAppointmentFromRemote().subscribe(data =>
      {
        this.appointments=data;
      });
  }
  updateAppointment(ap_id:number)
  {
    this.router.navigate(['update-appointment',ap_id]);
  }
  deleteAppointment(ap_id: number)
  {
    this.appointmentlistservice.deleteAppointment(ap_id).subscribe(data =>{
      console.log(data);
      this.getAppointments();
    })
  }

}
