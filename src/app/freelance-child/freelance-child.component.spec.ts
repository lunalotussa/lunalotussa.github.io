import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceChildComponent } from './freelance-child.component';

describe('FreelanceChildComponent', () => {
  let component: FreelanceChildComponent;
  let fixture: ComponentFixture<FreelanceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
