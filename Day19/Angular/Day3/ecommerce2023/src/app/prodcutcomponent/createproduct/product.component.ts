import { Component, OnInit } from '@angular/core';
import { Product } from './productmodel';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error( 'Method not implemented.' );
  }
      
    getproductdetsils(product : Product){
      console.log(product)
    }

}
