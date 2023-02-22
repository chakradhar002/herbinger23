import { Component } from '@angular/core';
import { Product } from './create-productModel';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {




onSubmitProduct(product:Product){
  console.log(product);  
}
}
