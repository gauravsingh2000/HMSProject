import { TestBed } from '@angular/core/testing';

import { DischargedpatientService } from './dischargedpatient.service';

describe('DischargedpatientService', () => {
  let service: DischargedpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargedpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
