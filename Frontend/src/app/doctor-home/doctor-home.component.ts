import { Component, OnInit } from '@angular/core';
import { Doctorlist } from '../doctorlist';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  router: any;
  doctors: Doctorlist[];
  constructor() { }

  ngOnInit(): void {
  }
  doctorDetails(d_id:number)
  {
    this.router.navigate(['doctordetails',d_id]);
  }
  Logout(){
    sessionStorage.clear();
    
  }
}
