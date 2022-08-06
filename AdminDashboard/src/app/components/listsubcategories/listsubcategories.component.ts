import { SubcategoriesService } from './../../services/subcategories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listsubcategories',
  templateUrl: './listsubcategories.component.html',
  styleUrls: ['./listsubcategories.component.css']
})
export class ListsubcategoriesComponent implements OnInit {

  listesubcategories: any;
  p: number = 1;
  search_name:any 
  constructor(private SubcategoriesService:SubcategoriesService) { }

  ngOnInit(): void {
    this.getall()
  }
  getall () {
    this.SubcategoriesService.getsubcategories().subscribe((res:any)=>{
      this.listesubcategories = res["data"]
      console.log("listesubcategories", this.listesubcategories)
    })

  }


}
