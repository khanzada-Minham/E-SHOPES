import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';
import { BehaviorSubject } from 'rxjs';
import { StoreDataService } from '../../../Services/store-data.service';
import { log } from 'console';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})


export class StoreComponent implements OnInit {
  priceFlag:boolean = true;
  productDetails: ProductDetailsModel[] = [];
  PriceFilter:ProductDetailsModel[] = []
  // minimum:number = 500;
  constructor(private storDataService: StoreDataService){ }

  ngOnInit(): void {
    this.gatProductData();
  }

  gatProductData(){
    this.storDataService.getStoreData().subscribe(data => {      
      this.productDetails = data;      
    });
  }
  addTwoCard(id:number){
      this.storDataService.addTwoCard(id)
  }
  filterData(min:number , max:number){
    if(min <= 10000){
      console.log('minValue',min);
      this.storDataService.getStoreData().subscribe(datavalue =>{
        this.productDetails = datavalue.filter(item => item.productPrice >= min && item.productPrice <= max) ;
        console.log('datavalue',this.productDetails);
         
      })
    }
    

  }
  HighestPriceFilter($event,val){ 

    // console.log(val.checked);
    
  if($event){
    this.productDetails.sort((x,y)=> y.productPrice - x.productPrice)
    val.checked = false;
    // this.storDataService.getStoreData().subscribe(x =>{
    //   this.productDetails = x.slice().sort((a,b) => b.productPrice - a.productPrice)
    // })
  }
  else{
   this.gatProductData();
  }

  }
  LowestPriceFilter($event,val){
    if($event){
      this.productDetails.sort((x,y)=> x.productPrice - y.productPrice)
      val.checked = false;
    }
    else{
      this.gatProductData();
    }
  }
} 