import { LoginService } from './../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };

  constructor(
    private LoginService:LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() : void {
  }

  //### Login user - button click method
  loginUser() : void {
   
    var requestlogin = {
      email:this.form.email,
      password:this.form.password
    }

    console.log(requestlogin);

    this.LoginService.login(requestlogin).subscribe({
        next: () => {
              // get return url from query parameters or default to home page
            //const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl('/Client');
        },
       
    });
  }


}
