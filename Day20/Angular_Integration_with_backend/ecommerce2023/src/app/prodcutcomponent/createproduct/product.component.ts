import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product-service';
import { Product } from './productmodel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {

      //define variable
      submitted = false;
      product: Product = new Product();//created object for prdduct

      ngOnInit(){
              }
                     //DI
    constructor(private productService: ProductService) { 
              }


        

      //create new Product
      createproduct(product:Product) {
        this.submitted = false;
        this.product = new Product();
        }


      save(){
          this.productService.createProductServcie(this.product)
          .subscribe(data=>{
          console.log(data),
          this.product = new Product();
           },
           error=>console.log(error)
          )};
   
    
          onSubmit() {
            this.submitted = true;
            this.save();    
          }


       
   
}
           
           



