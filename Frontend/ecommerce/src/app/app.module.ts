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
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductComponent } from './components/shopping-cart/listproduct/listproduct.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ListecategoriesComponent } from './components/listecategories/listecategories.component';
import { ListesubcategoriesComponent } from './components/listesubcategories/listesubcategories.component';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DetailorderComponent } from './components/detailorder/detailorder.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SectionComponent,
    NavbarComponent,
    NewsletterComponent,
    ShopComponent,
    AddproductComponent,
    ListproductComponent,
    ProductdetailComponent,
    ListecategoriesComponent,
    ListesubcategoriesComponent,
    DetailcategoryComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    DetailorderComponent,
    AboutusComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
