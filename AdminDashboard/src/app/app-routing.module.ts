import { FormsComponent } from './components/forms/forms.component';
import { CardsComponent } from './components/cards/cards.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UtilitiesAnimationComponent } from './components/utilities-animation/utilities-animation.component';
import { UtilitiesBorderComponent } from './components/utilities-border/utilities-border.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListsubcategoriesComponent } from './components/listsubcategories/listsubcategories.component';
import { TablesComponent } from './components/tables/tables.component';
import { UpdateordersComponent } from './components/updateorders/updateorders.component';
import { ListordersComponent } from './components/listorders/listorders.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ActivityComponent } from './components/activity/activity.component';
import { UtilitiesOtherComponent } from './components/utilities-other/utilities-other.component';
import { UtilitiesColorComponent } from './components/utilities-color/utilities-color.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';





const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"register",component:RegistreComponent},
 {path:'home',component:HomeComponent,children:[
  {path:'',component:LayoutComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'listcategories',component:ListcategoriesComponent},
  {path:"listorders",component:ListordersComponent},
  {path:"listsubcategories",component:ListsubcategoriesComponent},
  {path:"updateorders",component:UpdateordersComponent},
  {path:"tables",component:TablesComponent},
  {path:"settings",component:SettingsComponent},
  {path:"profile",component:ProfileComponent} ,
  {path:"editprofile",component:UpdateProfileComponent},
  {path:"activitylog",component:ActivityComponent},
  {path:"utilitiescolor",component:UtilitiesColorComponent},
  {path:"utilitiesborder",component:UtilitiesBorderComponent},
  {path:"utilitiesother",component:UtilitiesOtherComponent},
  {path:"utilitiesanimation",component:UtilitiesAnimationComponent},
  {path:"buttons",component:ButtonsComponent},
  {path:"cards",component:CardsComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},
  {path:"forms",component:FormsComponent}



]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
