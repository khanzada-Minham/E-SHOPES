import { Component, OnInit } from '@angular/core';
import { SellerAccountComponent } from '../../user/seller-account/seller-account.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  sellerInfo:any
  constructor(private SellerComponent:SellerAccountComponent){ 
    this.sellerInfo = this.SellerComponent.getSellerInformation().SellerFormData;    
   }

  ngOnInit(): void {

  }

}
