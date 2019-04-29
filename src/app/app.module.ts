import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';

import { RouterModule } from '@angular/router';
// import { StoreFirstGuard } from './storeFirst.guard';

// import { AdminModule } from './admin/admin.module';
// import { AuthComponent } from './admin/auth.component';
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      // { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      // { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      // { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      // { path: "**", redirectTo: "/store", canActivate: [StoreFirstGuard] },
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      { path: "**", redirectTo: "/store" },
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
