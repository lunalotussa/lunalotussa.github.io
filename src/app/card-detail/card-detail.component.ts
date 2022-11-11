import { Component, OnInit } from '@angular/core';
import { Kontak } from '../model/kontak';
import {ActivatedRoute} from '@angular/router';
import { KontakService } from '../service/kontak.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  contact: Kontak | undefined;

  constructor(
    private kontakService: KontakService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact()
  }

  getContact(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id')); //"2"
    this.kontakService.getContact(idParams)
      .subscribe(a => this.contact = a)
  }

  goBack(): void {
    this.location.back()
  }
}