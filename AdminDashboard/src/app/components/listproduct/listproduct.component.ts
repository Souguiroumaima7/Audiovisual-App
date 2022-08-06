import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  listproduct:any
  id=this.activeroute.snapshot.params["id"]
  product:any
  form!:FormGroup
  p: number = 1;
  search_name:any
   constructor(private ProductService:ProductService, private activeroute:ActivatedRoute  , private formbuilder:FormBuilder) { }

   ngOnInit(): void {

   this.getall()
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
     updateproduct(id:any) {
      this.ProductService.getbyid(this.id).subscribe((res:any)=>{
        this.product =res["data"]
        console.log("detail product",this.product)
        })
     }

     productdetail(id:any) {


      this.ProductService.getbyid(this.id).subscribe((res:any)=>{
        this.product =res["data"]
        this.form.patchValue({
         name:res["data"].name,
         description:res["data"].description,
         price:res["data"].price,

        })
        console.log("detail product",this.product)
        })

     }
   }




