import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/adminlogin.model';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  admin = new Admin();
  msg='';


  constructor(private _service : RegistrationService, private _router : Router) { }
    
  ngOnInit(): void {
  }
  
  registerAdmin(){
    this._service.registerAdminFromRemote(this.admin).subscribe(
      data =>{
        console.log("response recieved");
        alert('signup successfull');
        this._router.navigate(['/admin'])
        
      } ,
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
      )
  }

}


