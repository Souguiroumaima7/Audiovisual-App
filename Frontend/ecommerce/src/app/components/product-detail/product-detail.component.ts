import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
id = this.activeroute.snapshot.params["id"]
  product:any
   ProductList :any
   p:number = 1 ;
 constructor(private activeroute : ActivatedRoute,private ProductService:ProductService) { }

 ngOnInit(): void {
   this.getproductbyid()
 }
 getproductbyid() {
 this.ProductService.getbyid(this.id).subscribe((res:any)=>{
   this.product =res["data"]
   console.log("detail product",this.product)
   })
}

}



