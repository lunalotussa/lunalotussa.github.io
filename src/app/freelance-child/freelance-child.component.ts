import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FreelanceParentComponent } from '../freelance-parent/freelance-parent.component';
import { Freelance } from '../model/freelance';

@Component({
  selector: 'app-freelance-child',
  templateUrl: './freelance-child.component.html',
  styleUrls: ['./freelance-child.component.css']
})
export class FreelanceChildComponent {

  newItem = "TESTING FREELANCE";

  @Input() freelance!: Freelance;
  @Output() addFreelanceEvent = new EventEmitter<Freelance>();
  addNewFreelance(freelance: Freelance) {
    this.addFreelanceEvent.emit(freelance);
  }
  constructor(private freelanceParent: FreelanceParentComponent, private router: Router) { }
  ngOnInit(): void { }

  sendDelete(id: number): void {
    this.freelanceParent.onDelete(id);
  }

  sendEdit(id: number): void {
    this.router.navigateByUrl("/edit-freelancer/"+id)
  }
}
