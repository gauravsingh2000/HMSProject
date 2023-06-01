import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DoctorSignUp } from "../models/doctorsignup.model";


@Injectable({
    providedIn: 'root',
})

export class DoctorSignUpService {
    constructor(private _http:HttpClient) { }

public registerDoctorFromRemote(doctorsignup: DoctorSignUp):Observable<any> {
    return this._http.post<any>("http://localhost:8081/api/v1/doctors", doctorsignup)
  }

}