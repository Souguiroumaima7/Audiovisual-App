import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public listproduct : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }


  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.listproduct = res;

      this.listproduct.forEach((a: any) => {
        Object.assign(a, {total: a.price });
      });
    });
  }
  addtocart(Product: any){
    this.cartService.addtoCart(Product);
  }
  filter(category:string){
    this.filterCategory = this.listproduct
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


}
