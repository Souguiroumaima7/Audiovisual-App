import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  getcategories() {
    return this.http.get(`${environment.baseUrl}/categories/getall`)
  }
  deletecategories(id:any){
    return this.http.delete(`${environment.baseUrl}/categories/delete/${id}`)
  }
  getcbyid(id:any){
    return this.http.get(`${environment.baseUrl}/categories/getbyid/${id}`)
  }

  updatecategory(id:any,category:any) {
    return this.http.put(`${environment.baseUrl}/categories/update/${id}`,category)
  }
}
