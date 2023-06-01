import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaComponent } from './deletea.component';

describe('DeleteaComponent', () => {
  let component: DeleteaComponent;
  let fixture: ComponentFixture<DeleteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
