import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HTTP:HttpClient) { }

  deleteproducts(id:any) {
  return this.HTTP.delete(`${environment.baseUrl}products/delete/${id}`)
  }
  getproducts() {
    return this.HTTP.get(`${environment.baseUrl}products/getAll`)
  }
  getbyid(id:any) {
    return this.HTTP.get(`${environment.baseUrl}/products/getbyid/${id}`)
  }
  addproduct(product:any) {
    return this.HTTP.post(`${environment.baseUrl}/products/create`,product)
   }
 updateproduct(id:any,product:any) {
      return this.HTTP.put(`${environment.baseUrl}/products/update/${id}`,product)
    }
}
