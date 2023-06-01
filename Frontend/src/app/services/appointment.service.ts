import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment } from "../models/appointment.model";


@Injectable({
    providedIn: 'root',
})

export class AppointmentService {
    constructor(private _http:HttpClient) { }

public registerAppointmentFromRemote(appointment: Appointment):Observable<any> {
    return this._http.post<any>("http://localhost:8081/api/v1/appointments", appointment)
  }

}