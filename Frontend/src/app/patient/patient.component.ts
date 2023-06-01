import { Component, OnInit } from '@angular/core';
//import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationStatus } from '../models/AuthenticationStatus.model';
import { Patient } from '../models/patient';
import { PatientloginService } from '../services/patientlogin.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  authStatus: AuthenticationStatus | undefined;
  constructor(
    private patientloginService: PatientloginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void { }
  patientlogin:Patient=new Patient()
  onSubmit(form: NgForm) {
    console.log(form.value.username, form.value.password);
    sessionStorage.setItem("username",form.value.username);
    sessionStorage.setItem("password",form.value.password);
    

    this.patientloginService
    .authenticated(form.value.username, form.value.password)
    .subscribe((res) => {
      this.authStatus = res;
      if (this.authStatus.authenticated) {
        alert("Successfully logged in!")
        this.router.navigate(['/patienthomepage'], {relativeTo: this.route});
      }
      else {
        alert("Invalid Credentials!")
        this.router.navigate(['/patient'], { relativeTo: this.route});
        form.reset();
      }
    });
  
   
  }
};