import { Component, OnInit } from '@angular/core';
import { FreelanceService } from '../service/freelance.service';
import { Freelance, FreelanceModel } from '../model/freelance';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-freelance-edit',
  templateUrl: './freelance-edit.component.html',
  styleUrls: ['./freelance-edit.component.css']
})
export class FreelanceEditComponent implements OnInit {

  freelancer: Freelance = {
    id: 0,
    name: "",
    phone: "",
    skill: "",
    notes: ""
  };
  title: string = "Edit freelance"
  count: number = 1;
  inc(value: number) {
    this.count = this.count++;
  }

  modelFreelance = new FreelanceModel('', '', '', '')
  submitted = false;

  constructor(private freelanceService: FreelanceService, private location: Location,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //console.log(this.route?.snapshot.params['id'])
    this.freelanceService.getFreelance(this.route?.snapshot.params['id']).subscribe(
      (result) => {
        this.freelancer = result
        console.log(this.freelancer)
      }
    )
  }

  goBack(): void {
    this.location.back()
  }

  onSubmit() {
    this.submitted = true;
    this.updateFreelance()
  }
  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }
  updateFreelance(): void {
    // console.log(this.freelancer)
    this.freelanceService.editFreelanceService(this.freelancer.id,this.freelancer)
      .subscribe(freelance => {
        alert("SUKSES")
      })
  }
}