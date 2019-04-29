import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";

import { RouterModule } from '@angular/router';


@NgModule({
  // tell Angular that the StoreModule depends on:
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],

  // tell Augular that the StoreComponent will be used in other modules, which include a root module
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],

  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule { }
