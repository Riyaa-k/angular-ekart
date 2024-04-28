import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchText:string='';

  setSearchChange(value:string){
    this.searchText = value;
    // console.log(this.searchtext+"from parent component");

  }

}
