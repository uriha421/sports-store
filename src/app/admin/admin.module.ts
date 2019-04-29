import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  // you will use those modules in admin.modules(-> auth.component.ts, admin.component.ts...).
  imports: [CommonModule, FormsModule, RouterModule, routing],

  providers: [AuthGuard],

  // you will use those modules through this admin-module outside this admin-module.
  declarations: [AuthComponent, AdminComponent]
})

export class AdminModule {}
