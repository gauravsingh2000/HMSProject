import { TestBed } from '@angular/core/testing';

import { DischargedpatientlistService } from './dischargedpatientlist.service';

describe('DischargedpatientlistService', () => {
  let service: DischargedpatientlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargedpatientlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
