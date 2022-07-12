import { AddproductComponent } from './components/addproduct/addproduct.component';
import { RegistreclientComponent } from './components/registreclient/registreclient.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

import { DetailcartComponent } from './components/detailcart/detailcart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"footer",component:FooterComponent},
  {path:"header",component:HeaderComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"section",component:SectionComponent},
  {path:"cart",component:CartComponent},
  {path:'shop',component:ShopComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'detailcart',component:DetailcartComponent},
  {path: 'productdetail/:id', component:ProductdetailComponent},
  {path:'detailcategory/:id',component:DetailcategoryComponent},
  {path:'registreclient', component:RegistreclientComponent},
  {path:'addproduct',component:AddproductComponent} ,
  {path:'updateproduct/:id',component:ProductdetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
