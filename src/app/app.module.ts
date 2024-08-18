import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SingUpComponent } from './Component/user/sing-up/sing-up.component';
import { LoginComponent } from './Component/user/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './Component/main-layout/layout.component';
import { SellerlayoutComponent } from './Component/sellerlayout/sellerlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LoginComponent,
    LayoutComponent,
    SellerlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
