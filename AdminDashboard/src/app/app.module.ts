import { ListproductComponent } from './components/listproduct/listproduct.component';
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
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { ListsubcategoriesComponent } from './components/listsubcategories/listsubcategories.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailcategoryComponent } from './components/detailcategory/detailcategory.component';
import { ListordersComponent } from './components/listorders/listorders.component';
import { UpdateordersComponent } from './components/updateorders/updateorders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';
import { SearchComponent } from './components/search/search.component';
import { ReportComponent } from './components/report/report.component';
import { TablesComponent } from './components/tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    RegistreComponent,
    ProductdetailComponent,
    AddproductComponent,
    LoginComponent,
    ListproductComponent,
    ListcategoriesComponent,
    ListsubcategoriesComponent,
    UpdateproductComponent,
    DetailcategoryComponent,
    ListordersComponent,
    UpdateordersComponent,
    ProfileComponent,
    SettingsComponent,
    ActivityComponent,
    SearchComponent,
    ReportComponent,

    TablesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
