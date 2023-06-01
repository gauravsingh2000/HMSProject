import { TestBed } from '@angular/core/testing';

import { AppointmentlistService } from './services/appointmentlist.service';

describe('AppointmentlistService', () => {
  let service: AppointmentlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
