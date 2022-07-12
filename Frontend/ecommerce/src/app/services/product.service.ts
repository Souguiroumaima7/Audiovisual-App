import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  }



  deleteproducts(id:any) {
    return this.http.delete(`${environment.baseUrl}/products/delete/${id}`)
  }
}
