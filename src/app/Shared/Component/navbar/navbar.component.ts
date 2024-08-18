import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../../Services/store-data.service';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';
import { RouterLink } from '@angular/router';
import { flush } from '@angular/core/testing';
import { UserService } from '../../../Services/user.service';
import { LoginDetailsModel } from '../../../CORE/Models/LoginDetailsModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  [x: string]: any;
  navbarDetails: ProductDetailsModel[] = [];
  counter: number = 0;
  total: number = 0;
  value: any;

  public displayFlag: boolean = false;
  SearchProductData: ProductDetailsModel[] = []
  loginUserData: LoginDetailsModel;
  constructor(private items: StoreDataService, private UserServices: UserService) {

  }
  ngOnInit(): void {
    this.addData();
  }
  addData() {
    this.items.cardItem$.subscribe(values => {
      this.navbarDetails = values;
      this.counter = this.items.addcounter;
      if (values.length > 0) {
        this.total = values.map(x => x.productPrice * x.productquantity).reduce((i, c) => i + c);
      }
    })

    this.UserServices.UserObj$.subscribe((value) => {
      this.loginUserData = value;

    })
  }

  removeItem(id: number) {
    this.items.removeItem(id);
    this.counter = this.items.addcounter;
  }
  search(value: string) {
    // console.log('value', value)
    if (value === '') {
      this.SearchProductData = [];
      this.displayFlag = false;
    }
    else {
      this.SearchProductData = this.items.SearchProduct(value);
      this.displayFlag = true
    }
  }
  RemoveSearchProduct() {
    this.displayFlag = false;
  }


}
