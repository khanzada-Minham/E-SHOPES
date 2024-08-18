import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule

  ]
})
export class SellerModule { }
