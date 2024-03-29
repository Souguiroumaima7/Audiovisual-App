
import { SearchproductService } from 'src/app/services/searchproduct.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject, map, distinctUntilChanged, switchMap, catchError, throwError } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products: any |undefined;
  filtredProducts: any |undefined;
  categories:Category[] | undefined;
  searchText = ''
  searchCategory= new FormControl('');
  p:number=1


  constructor(private productservice:ProductService, private categoryservice : CategoryService) { }

  ngOnInit(): void {
    this.searchCategory.setValue('all')
    this.getALLProducts();
    this.getAllcategories()
  }
  getALLProducts(): void{
    this.productservice.getproducts().subscribe((res: any)=>{
      this.products=res["data"]
      this.filtredProducts = this.products
      console.log("list products",this.products)
    })

  }
  getAllcategories(){
    this.categoryservice. getcategories().subscribe((res:any)=>{
      this.categories=res.data
      console.log("list categories",this.categories)
    })
  }
  deleteProduct(id:any){

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
        this.productservice.deleteproducts(id).subscribe((res:any)=>
       { console.log(res)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      this.getALLProducts()})
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
