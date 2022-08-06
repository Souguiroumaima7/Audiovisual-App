import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
public ProductList:any 

  constructor(  private CartService:CartService,
    private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getProducts().subscribe(res=>{
      this.ProductList = res  ;
    })

  }

addToCart(item:any) {

  this.CartService.addToCart(item)

}
 

}
