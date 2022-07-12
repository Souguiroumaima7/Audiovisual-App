import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
constructor(private http:HttpClient) {}

  registre(registrelogin:any) {
    return this.http.post(`${environment.baseUrl}/admin/register`,registrelogin)
  }
}
