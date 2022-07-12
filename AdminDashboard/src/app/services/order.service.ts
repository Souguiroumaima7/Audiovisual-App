import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getorders() {
    return this.http.get(`${environment.baseurl}/orders/getall`)
  }
  deleteorders(id:any){
    return this.http.delete(`${environment.baseurl}/orders/delete/${id}`)
  }
  getordbyid(id:any){
    return this.http.get(`${environment.baseurl}/orders/getbyid/${id}`)
  }

  updateorders(id:any,orders:any) {
    return this.http.put(`${environment.baseurl}/orders/update/${id}`,orders)
  }
}
