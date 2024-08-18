import { Component ,inject,OnInit} from '@angular/core';
import { SellerFormModels } from '../../../CORE/Models/sellerFormModel';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../Seller/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrl: './seller-account.component.css'
})
export class SellerAccountComponent implements OnInit {

  SellerFrom:FormGroup;
  constructor(private Router:Router){

    
    this.SellerFrom = new FormGroup({
      companyName : new FormControl('', [Validators.required,Validators.minLength(3)]),
      companyEmail : new FormControl('', [Validators.required,Validators.email]),
      companyAddress : new FormControl('', [Validators.required,Validators.minLength(15)]),
      SellerCNICNumber : new FormControl('', [Validators.required,Validators.minLength(13),Validators.maxLength(13)]),
      CompanyPhoneNumber : new FormControl('', [Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      CompanyTexNumber : new FormControl('', [Validators.required,Validators.minLength(13),Validators.maxLength(13)]),
    })
   }

  ngOnInit(): void { }


   getSellerInformation(){
    
    if(!this.SellerFrom.invalid){
     this.Router.navigateByUrl('/dashboard')
        let SellerFormData:SellerFormModels = {
          companyName: this.SellerFrom.value.companyName,
          companyEmail: this.SellerFrom.value.companyEmail,
          companyAddress: this.SellerFrom.value.companyAddress,
          SellerCNICNumber: this.SellerFrom.value.SellerCNICNumber,
          CompanyPhoneNumber: this.SellerFrom.value.CompanyPhoneNumber,
          CompanyTexNumber: this.SellerFrom.value.CompanyTexNumber
        }

        console.log('SellerFormData',SellerFormData);
    }
    
   }
private readonly dialog = inject(MatDialog);

   openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
