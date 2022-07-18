import { SubcategoriesService } from './../../services/subcategories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listesubcategories',
  templateUrl: './listesubcategories.component.html',
  styleUrls: ['./listesubcategories.component.css']
})
export class ListesubcategoriesComponent implements OnInit {


  listesubcategories: any;
  p: number = 1;
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
