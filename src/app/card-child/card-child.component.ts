import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Kontak} from '../model/kontak'; 
@Component({
  selector: 'app-card-child',
  templateUrl: './card-child.component.html',
  styleUrls: ['./card-child.component.css']
})
export class CardChildComponent {
  newItem = "TESTING";
  
  @Input() kontak!: Kontak;
  @Output() addKontakEvent = new EventEmitter<Kontak>();
  addNewKontak(data: Kontak) {
    this.addKontakEvent.emit(data);
  }
  constructor() {}
  ngOnInit(): void {}
}
