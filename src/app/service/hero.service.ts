import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private url: string = 'http://localhost:3005/heroes';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getHeroes(): Observable <Hero[]>{
  return this.http.get<Hero[]>(this.url);
  }

  getHero(id:number):Observable<Hero>{
    //http://localhost:3005/heroes/1
    const urlByID = `${this.url}/${id}`
    return this.http.get<Hero>(urlByID)
  }

  //add hero service
  addHeroService(hero: Hero): Observable<Hero>{
   return this.http.post<Hero>(this.url, hero, this.httpOptions)
  }
}

