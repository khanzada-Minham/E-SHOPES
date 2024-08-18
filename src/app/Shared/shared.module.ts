import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ButtonsComponent } from './Component/buttons/buttons.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    ButtonsComponent,
    FooterComponent
  ]
})
export class SharedModule { }
