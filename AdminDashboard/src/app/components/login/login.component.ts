import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup

 submitted!: boolean;

  constructor(private formbuilder:FormBuilder,private LoginService:LoginService, private route:Router) { }

  ngOnInit(): void {
        this.form = this.formbuilder.group({
           email:['',Validators.required],
           password:['',Validators.required]
   })

  }

 onsubmit() {
    this.LoginService.login(this.form.value).subscribe((res:any)=>{
       console.log(res)
       if (res.message ==="Welcome") {
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

  }

