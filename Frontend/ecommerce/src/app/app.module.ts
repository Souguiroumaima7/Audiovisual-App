import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailcartComponent } from './components/detailcart/detailcart.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ListecategoriesComponent } from './components/listecategories/listecategories.component';
import { ListesubcategoriesComponent } from './components/listesubcategories/listesubcategories.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { RegistreclientComponent } from './components/registreclient/registreclient.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SectionComponent,
    NavbarComponent,
    CartComponent,
    NewsletterComponent,
    ShopComponent,
    CheckoutComponent,
    DetailcartComponent,
    AddproductComponent,
    ListproductComponent,
    ProductdetailComponent,
    ListecategoriesComponent,
    ListesubcategoriesComponent,
    DetailcategoryComponent,
    RegistreclientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
