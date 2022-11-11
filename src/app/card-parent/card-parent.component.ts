import { Component,Input, OnInit } from '@angular/core';
// import { KONTAK } from '../kontak'; 
import { Kontak, KontakModel } from '../model/kontak';
import { KontakService } from '../service/kontak.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-parent',
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.css']
})
export class CardParentComponent{
  contacts: Kontak[] =[]; //masuk data lewat properti ambil dr hero service
  title :string ="Kontaknya Lunaa"
  count: number = 1;
  inc(value: number){
    this.count = this.count++;
  }

  modelKontak = new KontakModel('Your First Name', 'Your Last Name','08')
  submitted = false;

  constructor(private kontakService: KontakService,private location: Location){}

    ngOnInit(): void{
      this.getContacts()
    }

    onSubmit(){
      this.submitted = true;
      this.addKontak()
    }

    getContacts(): void {
      // this.heroes = this.heroService.getHeroes()
      //mengeluarkan observable dr service
      this.kontakService.getContacts().subscribe(contacts=>this.contacts =contacts);
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

    addKontak(firstName : string = this.modelKontak.firstName,
      lastName : string = this.modelKontak.lastName,
      phone : string = this.modelKontak.phone) : void{
        firstName = firstName.trim();
        if(!firstName){return}
        this.kontakService.addContactService({firstName,lastName,phone} as Kontak)
        .subscribe(kontak => {
          this.contacts.push(kontak)
        })
      }
}
