import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
 listproduct:any

   public products : any = [];
   public grandTotal !: number;

  constructor(private CartService:CartService,public ProductService:ProductService) {

}
ngOnInit(): void {

  this.getall()

    this.CartService.getProducts()
    .subscribe(res=>{
      this.products = res;

    })

  }

  getall () {
    this.ProductService.getproducts().subscribe((res:any)=>{
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
          this.ProductService.deleteproducts(id).subscribe((res:any)=>{
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
