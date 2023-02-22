import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { CreateProductComponent } from './Product_Component/create-product/create-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CartComponent,
    CustomerAddressComponent,
    CreateProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
