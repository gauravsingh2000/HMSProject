import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationStatus } from "../models/AuthenticationStatus.model";


@Injectable({
    providedIn: 'root',
})

export class DoctorLoginService {
    constructor(private httpClient: HttpClient) {}
    authenticated(
        username: string,
        password: string
    ): Observable<AuthenticationStatus> {
        let body = {
            username: username,
            password: password,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<AuthenticationStatus>(
            'http://localhost:8081/api/v1/doctorlogin',
            body,
            {
                headers: headers,
            }
        );
    }
}