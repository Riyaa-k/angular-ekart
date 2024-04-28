import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  serachText: string=""

  @Output()
  searchTextchange:EventEmitter<string>=new EventEmitter<string>();

  
  onSearchTextChange(){
    this.searchTextchange.emit(this.serachText);
  }

  getinputtext(event:any){
    this.serachText=event.target.value;

  }

}
