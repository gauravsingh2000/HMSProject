import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctorlist } from '../doctorlist';
import { DoctorlistService } from '../services/doctorlist.service';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

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