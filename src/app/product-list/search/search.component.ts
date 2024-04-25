import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  serachText: string=""

  getinputtext(event:any){
    this.serachText=event.target.value;

  }

}
