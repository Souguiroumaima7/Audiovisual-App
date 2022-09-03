import { LoginService } from './../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  form : any
   submitted!: boolean;

    constructor(private formbuilder:FormBuilder,private LoginService:LoginService, private route:Router) { }

    ngOnInit(): void {
          this.form = this.formbuilder.group({
             email:['',Validators.required],
             password:['',Validators.required]
     })

    }


    login() {
      this.LoginService.login(this.form.value).subscribe((res:any)=>{
         console.log(res["data"])
         if (res.message ==="welcome") {
          localStorage.setItem("userconnect",JSON.stringify(res["data"]))
          localStorage.setItem("token",res.AT)
          localStorage.setItem("state","0")
          this.route.navigateByUrl("/home")
        }
      }
        , err=> {
          Swal.fire({
           icon:"error",
           title:"user not found",
           text:"email invalid",
           footer:"password"
          })
        }
      )
     }

     Login(): void {
      this.submitted = true;
       this.LoginService.login(this.form.value).subscribe((res:any)=>{
      console.log(res)

     })

     console.log(JSON.stringify(this.form.value, null, 2))
    }


}
