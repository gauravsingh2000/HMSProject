import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dischargedpatient } from '../models/dischargedpatient';

@Injectable({
  providedIn: 'root'
})
export class DischargedpatientService {

  constructor(private _http:HttpClient) { }

  public registerDischargedPatientFromRemote(dischargedpatient:Dischargedpatient):Observable<any> {
      return this._http.post<any>("http://localhost:8081/api/v1/dischargedpatients",dischargedpatient )
    }
  }