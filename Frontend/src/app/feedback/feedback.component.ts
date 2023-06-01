import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../models/feedback.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = new Feedback();
  msg = "";
  constructor(private _service:FeedbackService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerFeedback(){
    this._service.registerFeedbackFromRemote(this.feedback).subscribe(
      data => {
        console.log("Response received");
        alert("Feedback Submitted");
        this._router.navigate(['/'])

      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;
      }
    )
  }
}