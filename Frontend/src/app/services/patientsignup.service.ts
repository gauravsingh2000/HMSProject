import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientsignupService {
  constructor(private _http:HttpClient) { }
  
  public registerPatientFromRemote(patientsignup:Patient):Observable<any> {
    return this._http.post<any>("http://localhost:8081/api/v1/patients", patientsignup)
  }
}