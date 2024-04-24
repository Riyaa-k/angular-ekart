import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  serachText: string="John"

  getinputtext(event:any){
    this.serachText=event.target.value;

  }

}
