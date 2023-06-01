import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientslistService } from '../services/patientslist.service';
import { Patientslist } from '../models/patientslist';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patientslist[];
  constructor(private patientslistservice: PatientslistService,
    private router:Router) { }

  ngOnInit(): void {
    this.getPatients();
  }
  private getPatients()
  {
    this.patientslistservice.registerPatientsFromRemote().subscribe(data =>
      {
        this.patients=data;
      });
  }
  updatePatients(p_id:number)
  {
    this.router.navigate(['updatepatients',p_id]);
  }
  deletePatients(p_id: number)
  {
    this.patientslistservice.deletePatients(p_id).subscribe(data =>{
      console.log(data);
      this.getPatients();
    })
  }

}