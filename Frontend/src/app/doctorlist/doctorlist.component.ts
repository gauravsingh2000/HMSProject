import { Component, OnInit } from '@angular/core';
import { DoctorlistService } from '../services/doctorlist.service';
import { Doctorlist } from '../doctorlist';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorListComponent implements OnInit {
    doctors: Doctorlist[];
  constructor(private doctorlistservice: DoctorlistService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors()
  {
    this.doctorlistservice.registerDoctorFromRemote().subscribe(data =>
      {
        this.doctors=data;
      });
  }
  doctorDetails(d_id:number)
  {
    this.router.navigate(['doctordetails',d_id]);
  }
  updateDoctor(d_id:number)
  {
    this.router.navigate(['update-doctor',d_id]);
  }
  deleteDoctor(d_id: number)
  {
    this.doctorlistservice.deleteDoctor(d_id).subscribe(data =>{
      console.log(data);
      this.getDoctors();
    })
  }
}
