import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../../Services/store-data.service';
import { ProductDetailsModel } from '../../../CORE/Models/Product-detailsModel';
import { FormGroup ,FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-chack-out',
  templateUrl: './chack-out.component.html',
  styleUrl: './chack-out.component.css'
})
export class ChackOutComponent implements OnInit {
  
  details:ProductDetailsModel[] = []
  total:number = 0;
  myForm:FormGroup;
  discountflag: boolean = false;
  discountflag1: boolean = false;
  buttonFlag:boolean = false;

  constructor(private checkOut:StoreDataService) {
     this.myForm = new FormGroup ({
      email: new FormControl('',[Validators.required,Validators.email]),
      fname: new FormControl('',[Validators.required,Validators.min(3)]),
      lname: new FormControl('',[Validators.required,Validators.min(3)]),
      address: new FormControl ('',[Validators.required,Validators.min(10)]),
      city: new FormControl ('',[Validators.required,Validators.min(5)]),
      PostalCode: new FormControl('',[Validators.required,Validators.min(5)]),
      number: new FormControl('',[Validators.required,Validators.min(8)]),
     })
  }
  ngOnInit(): void {
    this.addData()
  }
  addData(){
    this.checkOut.cardItem$.subscribe(data =>{
      this.details = data;
      if(this.total > 0){
        this.total =  data.map(x=> x.productPrice * x.productquantity).reduce((i,c)=> i+c);
      }
    })
  }
  discount(value:string){
    if(value === ''){
      this.buttonFlag = true;
    }
    if(value === 'ABC543'){
      this.discountflag = true;
      this.total = this.total / 2
      this.buttonFlag = true;

    }
    else if(value === 'DA456'){
      this.discountflag1 = true;
      this.total = this.total - 1000
      this.buttonFlag = true;
    }
    else if(value === 'ZXCA'){
      this.total = this.total / 3
    }

    else{
      alert('Discount Code Invalid')
    }
  }
  dataForm(){
    if(!this.myForm.invalid){
      console.log(this.myForm.value);
    }
  }
}
