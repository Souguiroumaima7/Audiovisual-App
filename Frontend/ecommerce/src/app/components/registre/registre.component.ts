import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'helper/match';
import { RegistreService } from '../../../../../../AdminDashboard/src/app/services/registre.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  form!: FormGroup;
  submitted!: boolean;

  fileToUpload:Array<File>= [];

  constructor(private formbuilder:FormBuilder,private RegistreService:RegistreService,private route:Router ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        tel: ['', Validators.required],


        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
         validators: [Validation.match('password','confirmPassword')]
      }
    );
  }

  get f()  {
    return this.form.controls;
  }

  handleFileInput(files:any) {
    this.fileToUpload= <Array<File>>files.target.files ;
    console.log(this.fileToUpload) ;
  }

  register(): void {
    this.submitted = true;
let formdata = new FormData() ;
formdata.append("firstName", this.form.value.firstName);
formdata.append("lastName",this.form.value.lastName);
formdata.append("tel",this.form.value.tel);
formdata.append("password",this.form.value.password);
formdata.append("photo",this.fileToUpload[0]);

  this.RegistreService.register(formdata).subscribe((res:any)=>{
    console.log(res)

   })
   console.log(JSON.stringify(this.form.value, null, 2))
  }
 onReset(): void {
   this.submitted = false;
   this.form.reset();
 }
}
