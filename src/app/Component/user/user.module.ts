import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileImageComponent } from '../../Shared/Component/user-profile-image/user-profile-image.component';
import { ChackOutComponent } from './chack-out/chack-out.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SellerComponent } from './seller/seller.component';
import { StoreComponent } from './store/store.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerAccountComponent } from './seller-account/seller-account.component';
// import { SellerAccountComponent } from './seller-account/seller-account.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    ProductDetailsComponent,
    SellerComponent,
    ProductsComponent,
    UserProfileComponent,
    UserProfileImageComponent,
    ChackOutComponent,
    ViewCardComponent,
    SellerAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
