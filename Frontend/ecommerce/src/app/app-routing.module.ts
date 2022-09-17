import { ResultsComponent } from './components/results/results.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { RegistreComponent } from './components/registre/registre.component';
import { TermsandconditionComponent } from './components/termsandcondition/termsandcondition.component';
import { OrderandreturnComponent } from './components/orderandreturn/orderandreturn.component';

import { LoginComponent } from './components/login/login.component';
import { DetailCartComponent } from './components/detail-cart/detail-cart.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountComponent } from './components/account/account.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdreConfirmationComponent } from './components/ordre-confirmation/ordre-confirmation.component';
import { HelpComponent } from './components/help/help.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { HeaderComponent } from './components/header/header.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"Contact",component:ContactComponent},
  {path:"privacypolicy",component:PrivacyPolicyComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"account",component:AccountComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"viewcart",component:DetailCartComponent},
  {path:"register",component:RegistreComponent},
  {path:"shop",component:ShopComponent},
  {path:"account",component:AccountComponent},
  {path:"login",component:LoginComponent},
  {path:"order",component:OrdreConfirmationComponent},
  {path:"help",component:HelpComponent},
  {path:"orderandreturn",component:OrderandreturnComponent},
  {path:"terms",component:TermsandconditionComponent},
  {path:"order",component:OrdreConfirmationComponent},
  {path:"newsletter",component:NewsletterComponent},
  {path:"listproduct",component:DetailCartComponent},
 {path:"account/login",component:LoginComponent},
 {path:"login/forgetpassword",component:LoginComponent},
 {path:"login/register",component:RegistreComponent},
 {path:"search/productdetail/:id",component:ProductDetailComponent} ,
 {path:"search",component:ResultsComponent},














]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
