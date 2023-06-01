import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedpatientlistComponent } from './dischargedpatientlist.component';

describe('DischargedpatientlistComponent', () => {
  let component: DischargedpatientlistComponent;
  let fixture: ComponentFixture<DischargedpatientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargedpatientlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedpatientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
