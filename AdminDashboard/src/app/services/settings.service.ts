import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 constructor(private http:HttpClient) {}


   save(changes:any) {
  return this.http.put(`${environment.baseUrl}`,changes)
}

}
