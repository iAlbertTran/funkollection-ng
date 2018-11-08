import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FunkoPop } from '../models/funkopop';

import { RegisterModel } from '../models/register';
import { Series } from '../models/Series';
import { Category } from '../models/category';

import { HttpHeaders } from '@angular/common/http';

import { LoginModel } from '../models/loginModel';

@Injectable()
export class FunkollectionApiService {

  baseURL = 'http://localhost:8000/api';
  funkopopURL = this.baseURL + '/funkopop';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

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

  getCategories (): Observable<Series[]> {
    return this.http.get<Category[]>(`${this.baseURL}/category`)
      .pipe();
  }




  checkAvailableEmail( _email: String ){
    return this.http.post(`${this.baseURL}/account/isEmailRegistered`, {email: _email}, this.httpOptions);
  }

  checkAvailableUsername( _username: String ){
    return this.http.post(`${this.baseURL}/account/isUsernameRegistered`, {username: _username}, this.httpOptions);
  }

  registerUser( _registerModel: RegisterModel ){
    return this.http.post(`${this.baseURL}/account/register`, _registerModel, this.httpOptions);
  }

  loginUser( _loginModel: LoginModel ){
    return this.http.post(`${this.baseURL}/account/login`, _loginModel, this.httpOptions);
  }
  
}