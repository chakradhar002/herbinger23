import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateProductComponent } from './Product_Component/create-product/create-product.component';


//this is my routing table
const routes: Routes = [

  {path:'cart',component:CartComponent},
  {path:'customer',component:CustomerComponent},
  {path:'createProducts',component:CreateProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
