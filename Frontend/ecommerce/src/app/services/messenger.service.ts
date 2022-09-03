import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private _message : Subject<string>  = new Subject<string>();

  subject = new Subject()

  message$ : Observable<string>;


  constructor() {
    this.message$ = this._message.asObservable();
  }

  sendMessage(message: string)
  {
    console.log(this.message$);
    this._message.next(message);
  }




  sendMsg(Product: any) {
    this.subject.next(Product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
