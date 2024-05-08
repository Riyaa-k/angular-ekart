import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchText:string='';

  @ViewChild(ListComponent) productListComponent:ListComponent;

  setSearchChange(value:string){
    this.searchText = value;
    // console.log(this.searchtext+"from parent component");

  }

}
