import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }

  
  getcategories() {

    return this.http.get(`${environment.baseUrl}categories/getAll`)
  }
  getbyid(id:any){
    return this.http.get(`${environment.baseUrl}categories/getbyid/${id}`)
  }
  updatecbyid(category:any,id:any) {
    return this.http.put(`${environment.baseUrl}categories/update/${id}`,category)
  }
}
