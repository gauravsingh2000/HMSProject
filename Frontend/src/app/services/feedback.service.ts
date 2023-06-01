import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Feedback } from "../models/feedback.model";


@Injectable({
    providedIn: 'root',
})

export class FeedbackService {
    constructor(private _http:HttpClient) { }

public registerFeedbackFromRemote(feedback: Feedback):Observable<any> {
    return this._http.post<any>("http://localhost:8081/api/v1/feedbacks", feedback)
  }

}