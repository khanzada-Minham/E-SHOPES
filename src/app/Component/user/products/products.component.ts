import { Component,OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';
import { BehaviorSubject } from 'rxjs';
import { StoreDataService } from '../../../Services/store-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productDetails:ProductDetailsModel[] = []
  constructor(private storDataService:StoreDataService){ }

  ngOnInt():void{
    this.gatProductData();
  }
  gatProductData(){
    this.storDataService.getStoreData().subscribe(data => {
      console.log(data);
      
      // this.productDetails = data;
    });
}
}
