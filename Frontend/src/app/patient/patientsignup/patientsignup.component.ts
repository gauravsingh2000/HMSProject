import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PatientsignupService } from 'src/app/services/patientsignup.service';
import { Patient } from 'src/app/models/patient';
@Component({
  selector: 'app-patientsignup',
  templateUrl: './patientsignup.component.html',
  styleUrls: ['./patientsignup.component.css']
})
export class PatientsignupComponent implements OnInit {
newUser = new Patient;
msg = '';
  constructor(private service:PatientsignupService
     ,private router:Router) 
  {}
   ngOnInit(): void {}

   registerUser(){
    this.service.registerPatientFromRemote(this.newUser).subscribe(
      data =>{
     console.log("Response Received");
      this.msg="patient registration successful"
     alert(this.newUser.p_name +" you registered succesfully")
    //alert("Registration Successful!");
    this.router.navigate(['/patient'])
   },
   error => {
    console.log("exception occured")
    this.msg=error.error;
    
    alert('Invalid already Registered!!');
    }
    );
  
  }
}