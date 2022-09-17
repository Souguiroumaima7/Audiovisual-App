import { CategoryService } from './category.service';

import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from '../models/category.model';
import { FormControl } from '@angular/forms';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class SearchproductService {


     products: any;
     filtredProducts : any;
     categories!:Category[] ;
     searchText = ''
     searchCategory= new FormControl('');
     p:number=1
    search_name:any

    categoryList:any

    constructor(private productservice:ProductService,private CategoryService:CategoryService) { }

     ngOnInit(): void {
     this.searchCategory.setValue('all')
     this.getProducts()
     this.getcategories()
     }

     getProducts () {
       this.productservice.getproducts().subscribe((res:any)=>{
         this.products = res["data"]
         this.filtredProducts = this.products
         console.log("list product", this.products)
       })
     }

     getcategories () {
      this.CategoryService.getcategories().subscribe((res:any)=>{
        this.categoryList = res["data"]
        console.log("categoryList", this.categoryList)
      })

    }

   
}
