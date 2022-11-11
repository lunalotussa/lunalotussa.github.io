import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceEditComponent } from './freelance-edit.component';

describe('FreelanceEditComponent', () => {
  let component: FreelanceEditComponent;
  let fixture: ComponentFixture<FreelanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
