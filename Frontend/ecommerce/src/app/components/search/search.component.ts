import { Component ,OnInit} from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'mdb-angular-ui-kit-free';

  search(value: string) {
    console.log(value);
  }


  constructor() { }

  ngOnInit() {
   
  }
 
}
