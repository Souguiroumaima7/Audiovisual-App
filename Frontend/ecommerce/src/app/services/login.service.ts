import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private http:HttpClient) {}
 
  login(requestlogin:any) {
    return this.http.post(`${environment.baseUrl}/auth/login`,requestlogin)
  }
}
