import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent implements OnInit {
  listecategory:any
  p: number = 1;
  search_name:any

 constructor(private CategoryService:CategoryService) { }

 ngOnInit(): void {
   this.getall()
 }
 getall () {
   this.CategoryService.getcategories().subscribe((res:any)=>{
     this.listecategory = res["data"]
     console.log("listecategory", this.listecategory)
   })

 }

}
