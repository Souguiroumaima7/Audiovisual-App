import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  newsletterForm!:FormControl

  subscribe() {
    if(this.newsletterForm.valid) {
      console.log(this.newsletterForm.value);
    }

  }

  ngOnInit(): void {

    this.newsletterForm = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }


}
