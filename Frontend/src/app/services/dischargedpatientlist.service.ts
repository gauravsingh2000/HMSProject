import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dischargedpatientlist } from '../models/dischargedpatientlist';

@Injectable({
  providedIn: 'root'
})
export class DischargedpatientlistService {

  private baseURL = "http://localhost:8081/api/v1/dischargedpatients"
  constructor(private _http:HttpClient) { }

  public registerDishchargedPatientFromRemote():Observable<Dischargedpatientlist[]> {
    return this._http.get<Dischargedpatientlist[]>(`${this.baseURL}`)
  }
  getDischargedPatientsById(d_id:number):Observable<Dischargedpatientlist>
    {
      return this._http.get<Dischargedpatientlist>(`${this.baseURL}/${d_id}`)
    }
}
