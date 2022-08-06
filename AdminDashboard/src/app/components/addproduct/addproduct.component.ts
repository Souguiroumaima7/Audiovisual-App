import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { SubcategoriesService } from './../../services/subcategories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  listsubcategories:any
  submitted = false;
  form!:FormGroup;
  myfile:string []=[];
  constructor(private formBuilder: FormBuilder,private SubcategoriesService:SubcategoriesService, private ProductService:ProductService) {}
  ngOnInit(): void {
    this.getallsubcategories()
    this.form = this.formBuilder.group(
      {
        name:['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        stock: ['', Validators.required],
        subcategories:['',Validators.required]
      })
  }
  onFileChange(event:any) {
    for (var i=0 ; i< event.target.files.length; i++) {
      this.myfile.push(event.target.files[i]) ;
    }
  }
  //convenience getter for easy access to form fields
  get f()  {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
//stop here if form is invalid
//if (this.form.invalid){
//return ;
//}
let formdata = new FormData() ;
formdata.append("name", this.form.value.name);
formdata.append("description",this.form.value.description);
formdata.append("price",this.form.value.price);
formdata.append("stock",this.form.value.stock);
//formdata.append("id_provider",this.form.value.id_category)
for(var i=0;i<this.myfile.length;i++){
  formdata.append("photos",this.myfile[i]);
}
     this.ProductService.addproduct(formdata).subscribe((res:any)=>{
    console.log(res)
   })
   console.log(JSON.stringify(this.form.value, null, 2))
  }
 onReset(): void {
   this.submitted = false;
   this.form.reset();
 }
 getallsubcategories () {
  this.SubcategoriesService.getsubcategories().subscribe((res:any)=>{
    this.listsubcategories = res["data"]
    console.log("list subcategories", this.listsubcategories)
  })
}

}



