import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  // kalau mau declare isi di hello html
  templateUrl: './hello.component.html',
  // kalau mau declare langsung disini
  // template : `
  // <h1>Hello From Template Literals, Nama : {{nama1}}</h1>
  // <p>paragraf ini berasal dari template literals</p>
  // <!-- looping array pada tag <p> -->
  // <p *ngFor="let arr of array"> Array : {{arr}}</p> 
  // `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  nama1 =" Luna Lotussa"
  array = [
    '1',
    '2',
    '3'
  ]

  arrayForHtml =[
    "A",
    "B",
    "C"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
