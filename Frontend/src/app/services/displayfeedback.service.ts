import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Displayfeedback } from '../models/displayfeedback';

@Injectable({
  providedIn: 'root'
})
export class DisplayfeedbackService {
  private baseURL = "http://localhost:8081/api/v1/feedbacks"
  constructor(private _http:HttpClient) { }

  public registerDisplayFeedbackFromRemote():Observable<Displayfeedback[]> {
      return this._http.get<Displayfeedback[]>(`${this.baseURL}`)
    }
    getDisplayfeedbackById(p_id:number):Observable<Displayfeedback>
    {
      return this._http.get<Displayfeedback>(`${this.baseURL}/${p_id}`)
    }
    // updateDoctor(d_id:number,displayfeedback:Displayfeedback): Observable<Object>{
    //   return this._http.put(`${this.baseURL}/${d_id}`,doctorlist)
    // }
    // deleteDoctor(d_id:number): Observable<Object>
    // {
    //   return this._http.delete(`${this.baseURL}/${d_id}`);
    // }
  
}