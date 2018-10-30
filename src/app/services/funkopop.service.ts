import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/Series';
import { FunkoPop } from '../models/funkopop';

@Injectable()
export class FunkoPopService {

  baseURL = 'http://localhost:8000/api';
  funkopopURL = this.baseURL + '/funkopop';

  constructor(private http: HttpClient) {}

  getAllFunkoPops(){
    return this.http.get(`${this.funkopopURL}`);
  }

  getFunkoPop(name: string){
    return this.http.get(`${this.funkopopURL}/name`);
  }

  insertFunkoPop(funkopop: FunkoPop){
    return this.http.post(`${this.funkopopURL}`, funkopop);
  }

  updateFunkoPop(funkopop: FunkoPop) {
    return this.http.put(`${this.funkopopURL}/${funkopop.name}`, funkopop);
  }

  deleteFunkoPop(name: string) {
    return this.http.delete(`${this.funkopopURL}/name`);
  }

  getSeries (): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.baseURL}/series`)
      .pipe();
  }
}