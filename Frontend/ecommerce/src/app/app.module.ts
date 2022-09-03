import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AccountComponent } from './components/account/account.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { OrdreConfirmationComponent } from './components/ordre-confirmation/ordre-confirmation.component';
import { DetailCartComponent } from './components/detail-cart/detail-cart.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HelpComponent } from './components/help/help.component';
import { OrderandreturnComponent } from './components/orderandreturn/orderandreturn.component';
import { TermsandconditionComponent } from './components/termsandcondition/termsandcondition.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SearchComponent } from './components/search/search.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


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
    ContactComponent,
    PrivacyPolicyComponent,
    AboutusComponent,
    AccountComponent,
    CheckoutComponent,
    LoginComponent,
    RegistreComponent,
    OrdreConfirmationComponent,
    DetailCartComponent,
    ClientReviewComponent,
    SearchPipe,
    FilterPipe,
    HelpComponent,
    OrderandreturnComponent,
    TermsandconditionComponent,
    ForgetpasswordComponent,
    SearchComponent,
    AddproductComponent,
    UpdateproductComponent,
    ProductDetailComponent,

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
