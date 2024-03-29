import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  listcategories:any
  submitted = false;
  form!:FormGroup;
  myfile:string []=[];
  CategoryList: any;
  constructor(private formBuilder: FormBuilder,private categoryService:CategoryService, private ProductService:ProductService) {}
  ngOnInit(): void {
    this.getallcategories()
    this.form = this.formBuilder.group(
      {
        name:['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        categories:['',Validators.required]
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
 getallcategories () {
  this.categoryService.getcategories().subscribe((res:any)=>{
    this.CategoryList = res["data"]
    console.log("Category List", this.CategoryList)
  })
}

}
