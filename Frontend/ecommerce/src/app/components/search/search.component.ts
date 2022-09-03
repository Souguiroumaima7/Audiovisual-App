import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products!: any ;
  filtredProducts!: any;
  categories!:Category[];
  searchText = ''
  searchCategory= new FormControl('');
  p:number=1


  constructor(private productservice:ProductService , private categoryservice : CategoryService) { }

  ngOnInit(): void {
    this.searchCategory.setValue('all')
    this.getALLProducts();
    this.getallcategories()
  }
  getALLProducts(): void{
    this.productservice.getproducts().subscribe((res: any)=>{
      this.products=res["data"]
      this.filtredProducts = this.products
      console.log("list products",this.products)
    })

  }
  getallcategories(){
    this.categoryservice.getcategories().subscribe((res:any)=>{
      this.categories=res.data
      console.log("category List",this.categories)
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
      return product.name.toLowerCase().includes(this.searchText.toLowerCase()) && product.Category == this.searchCategory.value
      else {
        return product.category == this.searchCategory.value
      }
      
    }
    })
  }
}
