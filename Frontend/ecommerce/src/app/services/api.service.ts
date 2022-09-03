import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  private url: string = "http://localhost:4200";

  constructor(private http: HttpClient, private ProductService:ProductService) {}
  sendImage(photo: any) {
    return this.http.post<boolean>(this.url + "/pose?image=" + photo, null);
  }

  getProduct(){
    return this.http.get(`${environment.baseUrl}products/getAll`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
