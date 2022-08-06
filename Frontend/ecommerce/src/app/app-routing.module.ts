import { OrdreConfirmationComponent } from './components/ordre-confirmation/ordre-confirmation.component';

import { DetailCartComponent } from './components/detail-cart/detail-cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { RegistreComponent } from './../../../../AdminDashboard/src/app/components/registre/registre.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountComponent } from './components/account/account.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


   
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"Contact",component:ContactComponent},
  {path:"privacypolicy",component:PrivacyPolicyComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"account",component:AccountComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"register",component:RegistreComponent},
  {path:"shop",component:ShopComponent},
  {path:"account",component:AccountComponent},
  {path:"viewCart",component:DetailCartComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
