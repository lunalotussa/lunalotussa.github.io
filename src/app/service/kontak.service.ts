import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Kontak } from '../model/kontak';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KontakService {
  private url: string = 'http://localhost:3005/kontak';

  constructor(private http: HttpClient){}
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  getContacts(): Observable <Kontak[]>{
  return this.http.get<Kontak[]>(this.url);
  }

getContact(id:number):Observable<Kontak>{
  //http://localhost:3005/heroes/1
  const urlByID = `${this.url}/${id}`
  return this.http.get<Kontak>(urlByID)
  }

//add kontak service
addContactService(kontak: Kontak): Observable<Kontak>{
  return this.http.post<Kontak>(this.url, kontak, this.httpOptions)
  }
}
