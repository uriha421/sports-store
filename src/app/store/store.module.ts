import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";

@NgModule({
  // tell Angular that the StoreModule depends on:
  imports: [ModelModule, BrowserModule, FormsModule],

  // tell Augular that the StoreComponent will be used in other modules, which include a root module
  declarations: [StoreComponent, CounterDirective],
  exports: [StoreComponent]
})

export class StoreModule {
  // TODO
}
