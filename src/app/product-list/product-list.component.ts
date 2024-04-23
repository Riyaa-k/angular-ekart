import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name="John doe"
  product={
    name:"P1",
    price:400,
    colour:"Black",
    discount:8.5,
    instock:0,
    image:"/assets/images/1.png"
  }
  getdiscount(){
    return this.product.price-(this.product.price*this.product.discount/100);
  }

}
