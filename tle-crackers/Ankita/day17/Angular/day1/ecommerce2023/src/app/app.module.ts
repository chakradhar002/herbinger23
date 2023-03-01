import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CartComponent } from './cart/cart.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './product/deleteproduct/deleteproduct.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    ProductCategoryComponent,
    CartComponent,
    CustomerAddressComponent,
    SignUpComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
