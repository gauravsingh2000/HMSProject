import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedpatientComponent } from './dischargedpatient.component';

describe('DischargedpatientComponent', () => {
  let component: DischargedpatientComponent;
  let fixture: ComponentFixture<DischargedpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargedpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
