import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'productdetail/:id', component:ProductdetailComponent},
  {path:'detailcategory/:id',component:DetailcategoryComponent},
  {path:'addproduct',component:AddproductComponent} ,
  {path:'updateproduct/:id',component:ProductdetailComponent},
  {path:"Contact",component:ContactComponent},
  {path:"privacypolicy",component:PrivacyPolicyComponent},
  {path:"aboutus",component:AboutusComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
