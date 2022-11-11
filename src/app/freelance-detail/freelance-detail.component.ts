import { Component, OnInit } from '@angular/core';
import { Freelance } from '../model/freelance';
import {ActivatedRoute} from '@angular/router';
import { FreelanceService } from '../service/freelance.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-freelance-detail',
  templateUrl: './freelance-detail.component.html',
  styleUrls: ['./freelance-detail.component.css']
})
export class FreelanceDetailComponent implements OnInit {

  freelance: Freelance | undefined;

  constructor(
    private freelanceService: FreelanceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFreelance()
  }

  getFreelance(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id')); //"2"
    this.freelanceService.getFreelance(idParams)
      .subscribe(a => this.freelance = a)
  }

  goBack(): void {
    this.location.back()
  }

}
