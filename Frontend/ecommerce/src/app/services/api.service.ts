import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }    


  getProducts() {
    return this.http.get(`${environment.baseUrl}/products/getall`) 
    .pipe(map((res:any)=>{
         return res 

    }))
  }
}
