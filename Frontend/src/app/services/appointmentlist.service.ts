import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointmentlist } from '../appointmentlist';



@Injectable({
  providedIn: 'root'
})
export class AppointmentlistService {
  private baseURL = "http://localhost:8081/api/v1/appointments"
  constructor(private _http:HttpClient) { }

  public registerAppointmentFromRemote():Observable<Appointmentlist[]> {
    return this._http.get<Appointmentlist[]>(`${this.baseURL}`)
  }
  getAppointmentById(ap_id:number):Observable<Appointmentlist>
    {
      return this._http.get<Appointmentlist>(`${this.baseURL}/${ap_id}`)
    }
    updateAppointment(ap_id:number,doctorlist:Appointmentlist): Observable<Object>{
      return this._http.put(`${this.baseURL}/${ap_id}`,doctorlist)
    }
    deleteAppointment(ap_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${ap_id}`);
    }
}
