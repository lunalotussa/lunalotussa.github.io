import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceParentComponent } from './freelance-parent.component';

describe('FreelanceParentComponent', () => {
  let component: FreelanceParentComponent;
  let fixture: ComponentFixture<FreelanceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
