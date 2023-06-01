import { TestBed } from '@angular/core/testing';

import { DoctorRouteGuard } from './doctor-route.guard';

describe('DoctorRouteGuard', () => {
  let guard: DoctorRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
