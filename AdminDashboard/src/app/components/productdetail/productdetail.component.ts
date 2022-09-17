import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  ProductList :any
  id=this.ActivatedRoute.snapshot.params["id"]
  product:any
  p:number = 1

 constructor(private ActivatedRoute : ActivatedRoute,private productservice:ProductService) { }

 ngOnInit(): void {
   this.getbyid()
 }

 getbyid() {
 this.productservice.getbyid(this.id).subscribe((res:any)=>{
   this.product = res["data"]
   console.log("Product Detail", this.product)

   })

}



}
