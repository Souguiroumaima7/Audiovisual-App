import { CartService } from 'src/app/services/cart.service';

import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  listproduct :any
  id=this.ActivatedRoute.snapshot.params["id"]
  product:any
  p:number = 1 ;
  retrieveResponse: any;
  message!: string;
  public safeImage!: SafeUrl;
  thumbnail: any;
  image: any;


  retrievedImage: any;
  base64Data: any;



 constructor(private ActivatedRoute:ActivatedRoute,private productservice:ProductService,private httpclient:HttpClient ,private  route:Router,
  private CartService:CartService) { }

 ngOnInit(): void {
   this.getProductbyid()
   this.ActivatedRoute.paramMap.subscribe(() => {
    this.getProductbyid();
  });
  this.productservice.getproducts().subscribe((res:any) => {
    console.log(res['data'])
  })
  for (let product of this.listproduct) {
    product.imageUrl = product.image ? 'data:image/jpg;base64,' + product.image :
    "assets/img/product-placeholder.jpg";
     }
 }
  getProductbyid() {
  this.ActivatedRoute.snapshot.paramMap.get('id') ;
  this.productservice.getbyid(this.id).subscribe((res:any)=>{
   this.product = res["data"]
   console.log("Product Detail", this.product)

   })

}
addtocart(product: any) {
  this.CartService.addtoCart(product);
}

getImageInBD() {
  this.productservice.getImageInBD(this.image).subscribe(
    response => {
      this.retrieveResponse = response;
      //console.log("retrieveResonse: "+this.retrieveResonse);
      this.base64Data = this.retrieveResponse.picByte;
      //console.log("base64Data: "+this.base64Data);
      this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;
      //console.log("retrievedImage: "+this.retrievedImage);
    },
    error => {
      this.message = " Error Operation!!!! "
      console.log(error.toString());
    },
    () => {
      this.message = " Succeful Operation!!!! "
    }
  );

}

getImageInDirectory() {
  this.retrievedImage = this.productservice.getImageInDirectory(this.image)
  //this.imageService.getImageInDirectory(this.imageName)
}


}



