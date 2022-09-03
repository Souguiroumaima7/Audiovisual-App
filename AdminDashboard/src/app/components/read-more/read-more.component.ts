import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {
  @Input() isReadMore: boolean = false;
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
