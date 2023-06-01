import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../models/feedback.model';
import { DisplayfeedbackService } from '../services/displayfeedback.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-displayfeedback',
  templateUrl: './displayfeedback.component.html',
  styleUrls: ['./displayfeedback.component.css']
})
export class DisplayfeedbackComponent implements OnInit {

  feedbacks: Feedback[];
  constructor(private feedbackservice: DisplayfeedbackService,
    private router:Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }
  private getFeedbacks()
  {
    this.feedbackservice.registerDisplayFeedbackFromRemote().subscribe(data =>
      {
        this.feedbacks=data;
      });
  }
}