import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  serachText: string=""

  @Output()
  searchTextchange:EventEmitter<string>=new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl:ElementRef


  
  onSearchTextChange(){
    
  }

  updateSearchtext(){
    // this.serachText=event.target.value;
    // console.log(input.value)
    this.serachText=this.searchInputEl.nativeElement.value;
    this.searchTextchange.emit(this.serachText);

  }

}
