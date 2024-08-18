import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormModels } from '../../../CORE/Models/LoginFormModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  // name: string = ''
  constructor(private UserService: UserService, private router: Router) {


    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.min(4)]),
    })


  }
  ngOnInit(): void {
    const loginFlag = JSON.parse(localStorage.getItem('userLoginFormFlag'));
    console.log('loginFlag', typeof loginFlag);

    if (loginFlag) {
      this.router.navigateByUrl('/');
    }
  }
  dataForm() {
    console.log(this.myForm);
    
    if (!this.myForm.invalid) {
      let userFormData: LoginFormModels = {
        email: this.myForm.value.email,
        Password: this.myForm.value.Password,
        
      }
      console.log(this.myForm.value);
      this.UserService.getLogin(userFormData);

    }
  }

}
