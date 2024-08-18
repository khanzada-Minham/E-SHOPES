import { Component,OnInit } from '@angular/core';
import { StoreDataService } from '../../../Services/store-data.service';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit  {
  productDetailModel: ProductDetailsModel;
  counter:number = 0;
  displayFlag:boolean;
    addCounter(){
      if(this.counter <= this.productDetailModel.productInStock){
        this.counter ++;
      }
    }
    notAddCounter(){
      if(this.counter > 0){
        this.counter --;
      }

    }

    constructor(private storService: StoreDataService){ }

    ngOnInit(): void {
      this.getProductDetail()
      
    }

    getProductDetail(){
      this.storService.getProductDetail().subscribe(values => {
        this.productDetailModel = values;
        this.displayFlag = false;
     })
    }
    addTwoCard(id:number){  
      this.storService.addTwoCard(id)
    }
}
