import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  ProductList:any
 p: number = 1;
 search_name:any
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {

  this.getall()
  }

  getall () {
    this.ProductService.getproducts().subscribe((res:any)=>{
      this.ProductList = res["data"]
      console.log("list product", this.ProductList)
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
}
