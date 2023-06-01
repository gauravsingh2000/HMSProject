import { TestBed } from '@angular/core/testing';

import { DisplayfeedbackService } from './displayfeedback.service';

describe('DisplayfeedbackService', () => {
  let service: DisplayfeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayfeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
