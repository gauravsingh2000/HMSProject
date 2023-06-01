import { TestBed } from '@angular/core/testing';

import { PatientslistService } from './patientslist.service';

describe('PatientslistService', () => {
  let service: PatientslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
