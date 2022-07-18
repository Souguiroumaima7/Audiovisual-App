import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http:HttpClient,private HeaderService:HeaderService) { }

  getsubcategories() {
    return this.http.get(`${environment.baseUrl}/subcategories/getAll`)
  }
}
