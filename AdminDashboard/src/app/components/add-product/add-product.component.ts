import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  listcategories:any
  submitted = false;
  form!:FormGroup;
  myfile:string []=[];


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

let formdata = new FormData() ;
formdata.append("name", this.form.value.name);
formdata.append("description",this.form.value.description);
formdata.append("price",this.form.value.price);
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
 getallcategories () {
  this.categoryService.getcategories().subscribe((res:any)=>{
    this.listcategories = res["data"]
    console.log("Category List", this.listcategories)
  })
}


}
