import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor(private http:HttpClient) { }


  register(registrelogin:any) {
    return this.http.post(`${environment.baseurl}/admin/register`,registrelogin)
  }
}
