import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './Component/user/sing-up/sing-up.component';
import { LoginComponent } from './Component/user/login/login.component';
import { LayoutComponent } from './Component/main-layout/layout.component';
import { SellerlayoutComponent } from './Component/sellerlayout/sellerlayout.component';
// import { SellerlayoutComponent } from './Component/Seller/sellerlayout/sellerlayout.component';

const routes: Routes = [

  {path:'SingUp',component:SingUpComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'',component:LayoutComponent,loadChildren: () =>
    import('./Component/user/user.module').then(m => m.UserModule), 
  },
  {
    path:'dashboard',component:SellerlayoutComponent,loadChildren:()=>
    import('./Component/Seller/seller.module').then(m=>m.SellerModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
