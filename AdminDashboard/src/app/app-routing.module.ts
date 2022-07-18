
import { TablesComponent } from './components/tables/tables.component';
import { UpdateordersComponent } from './components/updateorders/updateorders.component';
import { ListordersComponent } from './components/listorders/listorders.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { ListsubcategoriesComponent } from './components/listsubcategories/listsubcategories.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
 {path:"",component:LoginComponent},
 {path:"register",component:RegistreComponent},
 {path:'home',component:HomeComponent,children:[
  {path:'',component:LayoutComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'listcategories',component:ListcategoriesComponent},
  {path:"listsubcategories",component:ListsubcategoriesComponent},
  {path:"listorders",component:ListordersComponent},
  {path:"updateorders",component:UpdateordersComponent},
  {path:"tables",component:TablesComponent},
  {path:"settings",component:SettingsComponent}

 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
