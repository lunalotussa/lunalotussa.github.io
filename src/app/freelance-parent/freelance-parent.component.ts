import { Component, OnInit } from '@angular/core';
import { FreelanceService } from '../service/freelance.service';
import { Freelance, FreelanceModel } from '../model/freelance';
import { Location } from '@angular/common';


@Component({
  selector: 'app-freelance-parent',
  templateUrl: './freelance-parent.component.html',
  styleUrls: ['./freelance-parent.component.css']
})
export class FreelanceParentComponent implements OnInit {

  freelancer: Freelance[] =[]; 
  title :string ="Judul awal freelance"
  count: number = 1;
  inc(value: number){
    this.count = this.count++;
  }

  modelFreelance = new FreelanceModel('', '','','')
  submitted = false;

  constructor(private freelanceService: FreelanceService,private location: Location){}

    ngOnInit(): void{
      this.getFreelancer()
    }

    onSubmit(){
      this.submitted = true;
      this.addFreelance()
    }

    onDelete(id:number){
      this.freelanceService.deleteFreelanceService(id).subscribe((response)=>{
        this. getFreelancer();
      });
    }

    getFreelancer(): void {
      //mengeluarkan observable dr service
      this.freelanceService.getFreelancer().subscribe(freelancer=>this.freelancer=freelancer);
    }

    goBack(): void {
      this.location.back()
    }

    validateNo(e: any): boolean{
      const charCode = e.which ? e.which: e.keyCode;
      if(charCode > 31 && (charCode < 48 || charCode > 57)){
        return false
      }
      return true
    }

    addFreelance(name : string = this.modelFreelance.name,
      phone : string = this.modelFreelance.phone,
      skill : string = this.modelFreelance.skill,
      notes : string = this.modelFreelance.notes) : void{
        name = name.trim();
        if(!name){return}
        this.freelanceService.addFreelanceService({name,phone,skill,notes} as Freelance)
        .subscribe(freelance => {
          this.freelancer.push(freelance)
        })
      }
}
