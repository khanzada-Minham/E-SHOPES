import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../../Services/store-data.service';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent implements OnInit{
  item:ProductDetailsModel[] = []
  totalPrices:number = 0;

  
  constructor(private value:StoreDataService) { }

  ngOnInit(): void { 
    this.addData()
  }
  addData(){
      this.value.cardItem$.subscribe((data)=>{
      this.item = data;
      this.totalPrices =  data.map(x=> x.productPrice * x.productquantity).reduce((i,c)=> i+c);
   }) 
}
}