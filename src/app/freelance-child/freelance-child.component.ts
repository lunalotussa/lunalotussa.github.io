import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Freelance } from '../model/freelance';

@Component({
  selector: 'app-freelance-child',
  templateUrl: './freelance-child.component.html',
  styleUrls: ['./freelance-child.component.css']
})
export class FreelanceChildComponent{

  newItem = "TESTING FREELANCE";
  
  @Input() freelance!: Freelance;
  @Output() addFreelanceEvent = new EventEmitter<Freelance>();
  addNewFreelance(freelance: Freelance) {
    this.addFreelanceEvent.emit(freelance);
  }
  constructor() {}
  ngOnInit(): void {}
}
