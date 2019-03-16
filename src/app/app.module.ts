import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
