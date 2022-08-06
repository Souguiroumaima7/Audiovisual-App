import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsletterForm!:FormControl
  constructor() { }

  ngOnInit(): void {
  }
  
  subscribe() {
    if(this.newsletterForm.valid) {
      console.log(this.newsletterForm.value);
    }

}
}