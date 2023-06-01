import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DoctorlistService } from '../services/doctorlist.service';
import { Doctorlist } from '../doctorlist';
@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  [x: string]: any;
  d_id:number;
  doctorlist:Doctorlist = new Doctorlist();
 
   
  constructor(private doctorlistservice: DoctorlistService, 
   private route: ActivatedRoute,
   private router:Router){}
  ngOnInit(): void {
    this.d_id=this.route.snapshot.params['d_id'];
    this.doctorlistservice.getDoctorById(this.d_id).subscribe(data => {
      this.doctorlist=data;
    }, error =>console.log(error)
    );
  }
  registerDoctors(){
  
    this.router.navigate(['/doctorslist']);

  error =>console.log(error);
}
  onSubmit()
  {
    this.doctorlistservice.updateDoctor(this.d_id,this.doctorlist).subscribe( data =>{
      this.registerDoctors();
    }, error =>console.log(error));
  }
 }