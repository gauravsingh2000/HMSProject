import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patientslist } from '../models/patientslist';

@Injectable({
  providedIn: 'root'
})
export class PatientslistService {

  private baseURL = "http://localhost:8081/api/v1/patients"
  constructor(private _http:HttpClient) { }

  public registerPatientsFromRemote():Observable<Patientslist[]> {
      return this._http.get<Patientslist[]>(`${this.baseURL}`)
    }
    getPatientsById(p_id:number):Observable<Patientslist>
    {
      return this._http.get<Patientslist>(`${this.baseURL}/${p_id}`)
    }
    updatePatients(p_id:number,patientslist:Patientslist): Observable<Object>{
      return this._http.put(`${this.baseURL}/${p_id}`,patientslist)
    }
    deletePatients(p_id:number): Observable<Object>
    {
      return this._http.delete(`${this.baseURL}/${p_id}`);
    }
}
