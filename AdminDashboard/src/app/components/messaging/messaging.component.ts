import { MessagingService } from 'src/app/services/messaging.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  
  public get messageService(): MessageService {
    return this._messageService;
  }
  public set messageService(value: MessageService) {
    this._messageService = value;
  }

  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {
  }

}
