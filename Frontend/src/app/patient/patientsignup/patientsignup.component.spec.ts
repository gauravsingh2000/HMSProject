import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsignupComponent } from './patientsignup.component';

describe('PatientsignupComponent', () => {
  let component: PatientsignupComponent;
  let fixture: ComponentFixture<PatientsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
