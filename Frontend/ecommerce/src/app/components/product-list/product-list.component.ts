import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  filtredProducts : any;
  categories!:Category[] ;
  searchText = ''
  searchCategory= new FormControl('');
  p:number=1
 search_name:any
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  this.searchCategory.setValue('all')
  this.getall()
  }

  getall () {
    this.productservice.getproducts().subscribe((res:any)=>{
      this.products = res["data"]
      this.filtredProducts = this.products
      console.log("list product", this.products)
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
    applyFilter()
    {
     this.filtredProducts = this.products.filter( (product: any) => {
      if (this.searchCategory.value=='all'){
        if (this.searchText!='')
               return product.name.toLowerCase().includes(this.searchText.toLowerCase())

        else {
          return true
        }
      }else{
        if (this.searchText!='')
        return product.name.toLowerCase().includes(this.searchText.toLowerCase()) && product.category==this.searchCategory.value;
        else {
          return product.category==this.searchCategory.value
        }

      }
      })
    }
}
