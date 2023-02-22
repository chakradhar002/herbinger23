import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { CartComponent } from './cart/cart.component';
import { CustomeraddressComponent } from './customeraddress/customeraddress.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './prodcutcomponent/createproduct/product.component';
import { CustomerComponent } from './customercomponent/addcustomer/customer.component';
import { UpdatecustomerComponent } from './customercomponent/updatecustomer/updatecustomer.component';
import { DeletecustomeComponent } from './customercomponent/deletecustome/deletecustome.component';
import { GetcustomerComponent } from './customercomponent/getcustomer/getcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    ProductcategoryComponent,
    CartComponent,
    CustomeraddressComponent,
    LoginComponent,
    SignupComponent,
    UpdatecustomerComponent,
    DeletecustomeComponent,
    GetcustomerComponent  // just now updated
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
