import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { LoginDetailsModel } from '../../../CORE/Models/LoginDetailsModel';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit{

  myForm:FormGroup;
  discountflag: boolean = false;
  discountflag1: boolean = false;
  buttonFlag:boolean = false;
  name:string = ''


  constructor(private UserService:UserService) {


     this.myForm = new FormGroup ({
      email: new FormControl('',[Validators.required,Validators.email]),
      fname: new FormControl('',[Validators.required,Validators.min(3)]),
      lname: new FormControl('',[Validators.required,Validators.min(3)]),
      address: new FormControl ('',[Validators.required,Validators.min(10)]),
      city: new FormControl ('',[Validators.required,Validators.min(5)]),
      PostalCode: new FormControl('',[Validators.required,Validators.min(5)]),
      number: new FormControl('',[Validators.required,Validators.min(8)]),
      Password: new FormControl('',[Validators.required,Validators.min(4)]),
     })
    }
    ngOnInit(): void {

    }

    dataForm(){
      if(!this.myForm.invalid){
      let userFormData:LoginDetailsModel = {
        email:this.myForm.value.email,
        name:this.myForm.value.fname,
        lname:this.myForm.value.lname,
        Address:this.myForm.value.address,
        city:this.myForm.value.city,
        PostalCode:this.myForm.value.PostalCode,
        PhoneNumber:this.myForm.value.number,
        Password:this.myForm.value.Password,
        Country:this.myForm.value.Country,
      }
      // console.log(this.myForm.value);
      this.UserService.getSingUp(userFormData);
       
      }
    } 
 
};
