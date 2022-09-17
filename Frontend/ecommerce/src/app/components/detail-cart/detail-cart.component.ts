import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product, products } from 'src/app/models/product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {

   listproduct:any

   public products : any = [];
   public grandTotal !: number;

  constructor(private CartService:CartService,public productservice:ProductService) {

}
ngOnInit(): void {

  this.getall()

    this.CartService.getProducts()
    .subscribe(res=>{
      this.products = res;

    })

  }

  getall () {
    this.productservice.getproducts().subscribe((res:any)=>{
      this.listproduct = res["data"]
      console.log("list product", this.listproduct)
    })
  }
    deleteproducts(id:any) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productservice.deleteproducts(id).subscribe((res:any)=>{
            console.log(res)

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getall()
        })
      }
      })
    }
    removeItem(item: any){
      this.CartService.removeCartItem(item);
    }
    emptycart(){
      this.CartService.removeAllCart();
    }

}


