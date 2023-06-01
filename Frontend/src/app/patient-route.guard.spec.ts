import { TestBed } from '@angular/core/testing';

import { PatientRouteGuard } from './patient-route.guard';

describe('PatientRouteGuard', () => {
  let guard: PatientRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatientRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
