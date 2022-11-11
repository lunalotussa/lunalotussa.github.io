import { Component, OnInit } from '@angular/core';
//import heroes
// import { HEROES } from '../data';
import { HeroService } from '../service/hero.service';
import { Hero, HeroModel } from '../model/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  // kalau line nya dikit mau langsung bikin disini aja
  // template :`
  // <p>Jumlah heroes ada {{heroes.length}}</p>
  //     <app-hero-child *ngFor="let hero of heroes" [hero]="hero"></app-hero-child>
  // `,
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent {
  // heroes = HEROES;
  heroes: Hero[] =[]; //masuk data lewat properti ambil dr hero service
  title :string ="Judul awal"
  count: number = 1;
  inc(value: number){
    this.count = this.count++;
  }

  modelHero = new HeroModel('Your Hero name', '9823388')
  submitted = false;

  constructor(private heroService: HeroService,private location: Location){}

    ngOnInit(): void{
      this.getHeroes()
    }

    onSubmit(){
      this.submitted = true;
      this.addHero()
    }

    getHeroes(): void {
      // this.heroes = this.heroService.getHeroes()
      //mengeluarkan observable dr service
      this.heroService.getHeroes().subscribe(heroes=>this.heroes =heroes);
    }

    goBack(): void {
      this.location.back()
    }

    // addHero(name : string, phone: string):void{
    //   name = name.trim();
    //   if(!name){return}
    //   let id = this.heroes.length+1;
    //   this.heroService.addHeroService({id,name,phone} as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero)
    //   }) //jalankan dulu di be kalau sudah terbaca return
    // }

    validateNo(e: any): boolean{
      const charCode = e.which ? e.which: e.keyCode;
      if(charCode > 31 && (charCode < 48 || charCode > 57)){
        return false
      }
      return true
    }

    addHero(name : string = this.modelHero.name,
      phone : string = this.modelHero.phone) : void{
        name = name.trim();
        if(!name){return}
        this.heroService.addHeroService({name,phone} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero)
        })
      }
  }

