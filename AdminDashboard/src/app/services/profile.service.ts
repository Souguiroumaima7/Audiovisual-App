import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  updateProfile(id:any,profile:any) {

    return this.http.put(`${environment.baseUrl}/admin/update/${id}`,profile)
  }


}
