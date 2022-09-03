import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { Error500Component } from './components/errorpages/error500/error500.component';
import { TypographComponent } from './components/typograph/typograph.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsComponent } from './components/cards/cards.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UtilitiesAnimationComponent } from './components/utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './components/utilities-border/utilities-border.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TablesComponent } from './components/tables/tables.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { SettingsComponent } from './components/settings/settings.component';


import { ActivityComponent } from './components/activity/activity.component';
import { UtilitiesOtherComponent } from './components/utilities-other/utilities-other.component';
import { UtilitiesColorComponent } from './components/utilities-color/utilities-color.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AlertComponent } from './components/alert/alert.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BackgroundComponent } from './components/background/background.component';
import { ErrorpagesComponent } from './components/errorpages/errorpages.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"register",component:RegistreComponent},
 {path:'home',component:HomeComponent,children:[
  {path:'',component:LayoutComponent},
  {path:"tables",component:TablesComponent},
  {path:"settings",component:SettingsComponent},
  {path:"profile",component:ProfileComponent} ,
  {path:"activitylog",component:ActivityComponent},
  {path:"utilitiescolor",component:UtilitiesColorComponent},
  {path:"utilitiesborder",component:UtilitiesBorderComponent},
  {path:"utilitiesother",component:UtilitiesOtherComponent},
  {path:"utilitiesanimation",component:UtilitiesAnimationComponent},
  {path:"buttons",component:ButtonsComponent},
  {path:"cards",component:CardsComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},
  {path:"forms",component:FormsComponent},
  {path:"readmore",component:CardComponent},
  {path:"alerts",component:AlertComponent},
  {path:"alert",component:AlertsComponent},
  {path:"dropdown",component:DropdownComponent},
  {path:"timeline",component:TimelineComponent},
  {path:"background",component:BackgroundComponent},
  {path:"typograph",component:TypographComponent},
  {path:"404",component:ErrorpagesComponent},
  {path:"500",component:Error500Component},
  {path:"addproduct",component:AddProductComponent},
  {path:"listproduct",component:ListProductComponent},
  {path:"addorders",component:AddOrdersComponent},
  {path:"ListOrders",component:ListOrdersComponent},
  {path:"ordersDetail",component:OrderDetailComponent},
  {path:'productdetail',component:ProductdetailComponent},
  {path:"viewcart",component:ViewCartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"search",component:SearchComponent},
  {path:'search/productdetail/:id',component:ProductdetailComponent},
  {path:'search/updateproduct/:id',component:UpdateProductComponent},
  {path:"search/addproduct",component:AddProductComponent},
  {path:"viewcart/Shop",component:ShopComponent},
  {path:"Shop",component:ShopComponent},
 


]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
