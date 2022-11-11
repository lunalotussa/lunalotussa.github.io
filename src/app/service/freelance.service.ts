import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Freelance } from '../model/freelance';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FreelanceService {

  private url: string = 'http://localhost:3005/freelance';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  getFreelancer(): Observable<Freelance[]> {
    return this.http.get<Freelance[]>(this.url);
  }

  getFreelance(id: number): Observable<Freelance> {
    //http://localhost:3005/heroes/1
    const urlByID = `${this.url}/${id}`
    return this.http.get<Freelance>(urlByID)
  }

  //add freelance service
  addFreelanceService(freelance: Freelance): Observable<Freelance> {
    return this.http.post<Freelance>(this.url, freelance, this.httpOptions)
  }

  deleteFreelanceService(id: number): Observable<Freelance> {
    const urlByID = `${this.url}/${id}`
    return this.http.delete<Freelance>(urlByID)
  }

  editFreelanceService(id: number,freelance: Freelance): Observable<Freelance> {
    const urlByID = `${this.url}/${id}`
    //const urlByID = `${this.url}/${freelance.id as number}` => tanpa param id 
    return this.http.put<Freelance>(urlByID, freelance,this.httpOptions)
  }

}
