import { HomeComponent } from './components/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"footer",component:FooterComponent},
  {path:"header",component:HeaderComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"section",component:SectionComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
