import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customercomponent/addcustomer/customer.component';
import { ProductComponent } from './prodcutcomponent/createproduct/product.component';


// this is routing mapping table
const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
