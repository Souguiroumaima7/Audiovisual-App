import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RegistreComponent } from './components/registre/registre.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';
import { TablesComponent } from './components/tables/tables.component';

import { SearchPipe } from './pipes/search.pipe';

import { UtilitiesBorderComponent } from './components/utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './components/utilities-color/utilities-color.component';
import { UtilitiesAnimationComponent } from './components/utilities-animation/utilities-animation.component';
import { UtilitiesOtherComponent } from './components/utilities-other/utilities-other.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormsComponent } from './components/forms/forms.component';
import { MessageComponent } from './components/message/message.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';
import { CardComponent } from './components/card/card.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AlertComponent } from './components/alert/alert.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProgressComponent } from './components/progress/progress.component';
import { BackgroundComponent } from './components/background/background.component';
import { TypographComponent } from './components/typograph/typograph.component';
import { ErrorpagesComponent } from './components/errorpages/errorpages.component';
import { Error500Component } from './components/errorpages/error500/error500.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ShopComponent } from './components/shop/shop.component';
import { UpdateordersComponent } from './components/updateorders/updateorders.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    RegistreComponent,
    LoginComponent,
   ProfileComponent,
    SettingsComponent,
    ActivityComponent,
    TablesComponent,
    SearchPipe,
    UtilitiesBorderComponent,
    UtilitiesColorComponent,
    UtilitiesAnimationComponent,
    UtilitiesOtherComponent,
    ButtonsComponent,
    CardsComponent,
    ForgetPasswordComponent,
    FormsComponent,
    MessageComponent,
    FilterPipe,
    CardComponent,
    ReadMoreComponent,
    AlertsComponent,
    MessagingComponent,
    DropdownComponent,
    AlertComponent,
    TimelineComponent,
    ProgressComponent,
    BackgroundComponent,
    TypographComponent,
    ErrorpagesComponent,
    Error500Component,
    AddProductComponent,
    ListProductComponent,
    AddOrdersComponent,
    ListOrdersComponent,
    OrderDetailComponent,
    ViewCartComponent,
    CheckoutComponent,
    ProductdetailComponent,
    UpdateProductComponent,
    ShopComponent,
    UpdateordersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
