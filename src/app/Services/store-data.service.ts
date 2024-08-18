import { Inject, Injectable, Input, input, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDetailsModel } from '../CORE/Models/Product-detailsModel';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LoginDetailsModel } from '../CORE/Models/LoginDetailsModel';


@Injectable({
  providedIn: 'root'
})
export class StoreDataService implements OnInit{
  [x: string]: any;
  productData$: BehaviorSubject<ProductDetailsModel[]> = new BehaviorSubject<ProductDetailsModel[]>([]);
  ProductDetail$: BehaviorSubject<ProductDetailsModel> = new BehaviorSubject<ProductDetailsModel>(null); 
  cardItem$: BehaviorSubject<ProductDetailsModel[]> = new BehaviorSubject<ProductDetailsModel[]>([]);
  checkOutForm$ :BehaviorSubject<LoginDetailsModel> = new BehaviorSubject<LoginDetailsModel>(null);
  public addcounter:number = 0; 
  public totalPrices:number = 0;
  cart = [];
  // AddressDetails:any = [];


  constructor(@Inject(PLATFORM_ID) private platformId: any, private route: ActivatedRoute) {
   
    if (isPlatformBrowser(this.platformId)) {
      const storedData = localStorage.getItem('AddToCart');
      if (storedData) {
        this.cart = JSON.parse(storedData);
      }
    }
    this.route.queryParams.subscribe((params) => {
      const categoryName = params['category']; 
      const ProId = params['proId'];
    
      if (categoryName) { 
        let filterData = data.filter(x => x.category.toLowerCase() === categoryName.toLowerCase());
        this.productData$.next(filterData);
      } else {
        this.productData$.next(data);
      }    
      if(ProId){
        const product = data.find(x => x.productId === parseInt(ProId, 10));
        this.ProductDetail$.next(product);
      }
      if(this.cart){
        this.cardItem$.next(this.cart);
        this.addcounter = this.cart.length;
      }
    });
  }
ngOnInit(): void {
  
}
  getStoreData(): Observable<ProductDetailsModel[]> {
    return this.productData$.asObservable();
  }
 
  getProductDetail(): Observable<ProductDetailsModel> {
    return this.ProductDetail$.asObservable();
  }

  addTwoCard(id:number){
  let filterData = data.find(x => x.productId === id);
  let cartData:[] = this.cart.find(x => x.productId === id);
  if(filterData.productquantity !== filterData.productInStock){
    if(!cartData){
      filterData.productquantity = 1;
      this.cart.push(filterData);
      this.addcounter = this.cart.length;
      this.cardItem$.next(this.cart);         
    }
    else{
      filterData.productquantity ++;
    }
  }
  else{
    alert('Out Of Stock')
  }
    localStorage.setItem('AddToCart', JSON.stringify(this.cart));

  }
  removeItem(id:number){
    let removedata = this.cart.findIndex(x => x.productId === id);
    let filterData = data.find(x => x.productId === id);
    this.totalPrices -= filterData.productPrice;
    if(removedata !== -1){
      this.cart.splice(removedata, 1);
      localStorage.setItem('AddToCart', JSON.stringify(this.cart));
      this.cardItem$.next(this.cart);
      this.addcounter = this.cart.length;   
    }
  }
  SearchProduct(value:string){
    let SearchFind = data.filter(x => x.category.toLowerCase().includes(value.toLowerCase()) || x.productName.toLowerCase().includes(value.toLowerCase()))
    return SearchFind;
  }

}

const data: ProductDetailsModel[] = [
  { productId: 1,  productPrice: 2930, productdiscountPrice: 3930, productInStock: 15, productquantity: 0, category: 'Headphone', productName: 'Headphones', productImage: '../../../../assets/images/countryIcons/pngimg.com-headphones_PNG7659.png', productDescription: 'Wireless Headphones Gaming Earphone Bluetooth 5.3 Sport Earbuds with Mic Wireless...' },
  { productId: 2,  productPrice: 6000, productdiscountPrice: 7850, productInStock: 3, productquantity: 0, category: 'Headphone', productName: 'Headphones', productImage: '../../../../assets/images/countryIcons/headPhonesInDisplay.webp', productDescription: 'Wireless Headphones Gaming Earbuds Wireless Headphones Bluetooth Earphones...' },
  { productId: 3,  productPrice: 14000, productdiscountPrice: 18000, productInStock: 3, productquantity: 0, category: 'Headphone', productName: 'Headphones', productImage: '../../../../assets/images/countryIcons/headPhonesInDisplay2.webp', productDescription: 'Earbuds Wireless Headphones Bluetooth Earphones....' },
  { productId: 4,  productPrice: 3930, productdiscountPrice: 5930, productInStock: 2, productquantity: 0, category: 'Headphone', productName: 'Headphones', productImage: '../../../../assets/images/countryIcons/headPhonesInDisplay3.webp', productDescription: 'Earbuds Wireless Headphones Bluetooth Earphones....' },
  { productId: 5,  productPrice: 49175, productdiscountPrice: 53910, productInStock: 1, productquantity: 0, category: 'Headphone', productName: 'Gaming Headphones', productImage: '../../../../assets/images/countryIcons/headPhonesInDisplay4.webp', productDescription: 'Razer BlackShark V2 Pro Wireless Esports Headset....' },
  { productId: 6,  productPrice: 50000, productdiscountPrice: 54999, productInStock: 3, productquantity: 0, category: 'Headphone', productName: 'Gaming Headphones', productImage: '../../../../assets/images/countryIcons/headPhonesInDisplay5.webp', productDescription: 'Razer BlackShark V2 Pro Wireless Esports Headset....' },
  { productId: 7,  productPrice: 8500, productdiscountPrice: 10000, productInStock: 9, productquantity: 0, category: 'PowerBank', productName: 'Samsung Galaxy Pixel Nexus', productImage: '../../../../assets/images/countryIcons/batterCharger1.webp', productDescription: 'Portable Charger 38800mAh,LCD Display Power Bank,5 USB Outputs Battery Pack Backup....' },
  { productId: 8,  productPrice: 12750, productdiscountPrice: 15750, productInStock: 5, productquantity: 0, category: 'PowerBank', productName: 'Ultra Slim Portable Phone Charger', productImage: '../../../../assets/images/countryIcons/batterCharger2.webp', productDescription: 'Portable Charger Power Bank 10000mAh【2 Pack】Ultra Slim Portable Phone Charger with USB C Input & 2 Output Backup Charging...' },
  { productId: 9,  productPrice: 7850, productdiscountPrice: 9000, productInStock: 4, productquantity: 0, category: 'PowerBank', productName: 'Samsung LG Tablet', productImage: '../../../../assets/images/countryIcons/batterCharger3.webp', productDescription: 'VEEKTOMX Portable Charger with Built in Cables 22.5W 10000mAh, Power Bank for iPhone with AC Wall Plug, Travel Essentials Fast Charging USB C Slim Battery Pack Compatible with iPhone Samsung LG Tablet...' },
  { productId: 10, productPrice: 15000, productdiscountPrice: 13000, productInStock: 7, productquantity: 0, category: 'PowerBank', productName: '100W USB C Laptop Portable Charger', productImage: '../../../../assets/images/countryIcons/batterCharger4.webp', productDescription: 'INIU Power Bank, 25000mAh 100W USB C Laptop Portable Charger, PD QC Fast Charging 3-Output External Battery Pack for Laptop MacBook Dell XPS iPad Tablet Steam Deck iPhone 15 14 13 Pro Samsung S22 etc...' },
  { productId: 11, productPrice: 12999, productdiscountPrice: 16000, productInStock: 6, productquantity: 0, category: 'PowerBank', productName: 'Portable Charger 26800mAh Power Bank ', productImage: '../../../../assets/images/countryIcons/batterCharger5.webp', productDescription: 'CONXWAN Portable Charger 26800mAh Power Bank 22.5W Fast Charging, 4 USB Outputs PD External Backup Charger Cell Phone USB C Battery Pack Compatible with iPhone Tablets Galaxy Android...' },
  { productId: 12, productPrice: 5000, productdiscountPrice: 7000, productInStock: 7, productquantity: 0, category: 'PowerBank', productName: 'Mini Battery Pack for Power Bank ', productImage: '../../../../assets/images/countryIcons/batterCharger6.webp', productDescription: 'Portable Charger for iPhone 15 Power Bank, 6000mAh USB-C Portable Phone Charger with Fast Charging (20W), Mini Battery Pack for iPhone 15 Pro/15 Plus/15 Promax/Samsung/Huawei Andriod - White...' },
  { productId: 13, productPrice: 10000, productdiscountPrice: 12000, productInStock: 2, productquantity: 0, category: 'PowerBank', productName: 'Charging Slimmest', productImage: '../../../../assets/images/countryIcons/batterCharger7.webp', productDescription: 'INIU Portable Charger, 20W PD3.0 Fast Charging Slimmest 10000mAh Power Bank, USB C in/Out QC4+ Battery Pack, Portable Phone Charger for iPhone 15 14 13 12 11 Pro Samsung S22 S21 Google AirPods iPad...' },
];


