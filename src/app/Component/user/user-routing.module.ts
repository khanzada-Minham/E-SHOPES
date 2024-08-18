import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChackOutComponent } from './chack-out/chack-out.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SellerComponent } from './seller/seller.component';
import { StoreComponent } from './store/store.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { SellerAccountComponent } from './seller-account/seller-account.component';
import { DashboardComponent } from '../Seller/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'Home',component:HomeComponent},
  {path:'store',component:StoreComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'seller',component:SellerComponent},
  {path:'products',component:ProductsComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'check-out',component:ChackOutComponent},
  {path:'view-card',component:ViewCardComponent},
  {path:'SellerAccount',component:SellerAccountComponent},
  {path:'Seller/dashboard',component:DashboardComponent},
  // {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
