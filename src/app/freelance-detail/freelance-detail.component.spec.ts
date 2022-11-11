import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceDetailComponent } from './freelance-detail.component';

describe('FreelanceDetailComponent', () => {
  let component: FreelanceDetailComponent;
  let fixture: ComponentFixture<FreelanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
