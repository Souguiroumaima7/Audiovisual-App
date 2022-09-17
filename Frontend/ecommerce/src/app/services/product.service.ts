import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public host: string = 'http://localhost:4000';

  constructor(private http:HttpClient) { }

  deleteproducts(id:any) {
  return this.http.delete(`${environment.baseUrl}/products/delete/${id}`)
  }
  getproducts() {
    return this.http.get(`${environment.baseUrl}products/getAll`)
  }
  getbyid(id:any) {
    return this.http.get(`${environment.baseUrl}products/getbyid/${id}`)
  }
  addproduct(product:any) {
    return this.http.post(`${environment.baseUrl}products/create`,product)
   }
 updateproduct(id:any,product:any) {
      return this.http.put(`${environment.baseUrl}/products/update/${id}`,product)
    }

    getImageInBD(imageName: string) {
      return this.http.get(this.host+"/image/get/" + imageName);

    }

    getImageInDirectory(imageName: string) {
      return this.host+"/image/get1/" + imageName; //image path return

    }
}
