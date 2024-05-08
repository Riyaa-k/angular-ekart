import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  

  @Input() productComp:ListComponent=undefined;
  product:Product;

  ngOnInit(){
    this.product=this.productComp.selectedProduct;
  }


}
