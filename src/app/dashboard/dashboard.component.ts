import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   // heroes = HEROES;
   heroes: Hero[] =[]; //masuk data lewat properti ambil dr hero service
   title :string ="Ini Dashboard"
   count: number = 1;
   inc(value: number){
     this.count = this.count++;
   }
 
   constructor(private heroService: HeroService){}
 
     ngOnInit(): void{
       this.getHeroes()
     }
 
     getHeroes(): void {
       // this.heroes = this.heroService.getHeroes()
       //mengeluarkan observable dr service
       this.heroService.getHeroes().subscribe(heroes=>this.heroes =heroes);
     }

}
