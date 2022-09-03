import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  updateprofile(id:any,data:any)  {
    return this.http.put(`${environment.baseUrl}/admin/update/${id}`,data)
   }
   getusers() {
    return this.http.get(`${environment.baseUrl}admin/getall`)
   }
   deleteusers(id:any) {
      return this.http.delete(`${environment.baseUrl}admin/delete/${id}`)
   }


   addusers(data:any) {
    return this.http.post(`${environment.baseUrl}admin/register`,data)
   }
}
