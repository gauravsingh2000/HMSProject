import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DoctorSignUp } from "../models/doctorsignup.model";
import { Doctorlist } from '../doctorlist';
@Injectable({
  providedIn: 'root'
})
export class DoctorlistService {

  private baseURL = "http://localhost:8081/api/v1/doctors"
  constructor(private _http:HttpClient) { }

  public registerDoctorFromRemote():Observable<Doctorlist[]> {
      return this._http.get<Doctorlist[]>(`${this.baseURL}`)
    }
    getDoctorById(d_id:number):Observable<Doctorlist>
    {
      return this._http.get<Doctorlist>(`${this.baseURL}/${d_id}`)
    }
    updateDoctor(d_id:number,doctorlist:Doctorlist): Observable<Object>{
      return this._http.put(`${this.baseURL}/${d_id}`,doctorlist)
    }
    deleteDoctor(d_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${d_id}`);
    }
}
