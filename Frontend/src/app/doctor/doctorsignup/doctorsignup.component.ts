import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorSignUp } from 'src/app/models/doctorsignup.model';
import { DoctorSignUpService } from 'src/app/services/doctorsignup.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {
  doctorsignup = new DoctorSignUp();
  msg = '';

  constructor(private _service:DoctorSignUpService, private _router: Router) { }
  
  ngOnInit(): void {
  }

  registerDoctor(){
    this._service.registerDoctorFromRemote(this.doctorsignup).subscribe(
      data => {
        console.log("Response received");
        alert(this.doctorsignup.d_name +" you registered succesfully");
        this._router.navigate(['/doctor'])
       
      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;

        alert('Invalid already Registered!');
      }
    );
   
  }
}
