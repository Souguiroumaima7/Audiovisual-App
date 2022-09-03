import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


    constructor(private http:HttpClient) { }

  registreclient (client:any) {
    return this.http.post(`${environment.baseUrl}clients/register`,client)
  }
}
