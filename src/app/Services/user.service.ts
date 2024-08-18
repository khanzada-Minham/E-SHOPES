import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoginDetailsModel } from '../CORE/Models/LoginDetailsModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginFormModels } from '../CORE/Models/LoginFormModel';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: LoginDetailsModel[] = [];
  currentUser: LoginDetailsModel;
  UserLoginFlag: boolean = false;
  UserObj$: BehaviorSubject<LoginDetailsModel> = new BehaviorSubject<LoginDetailsModel>(null);
  constructor(@Inject(PLATFORM_ID) private platformId: any, private route: ActivatedRoute) {


    if (isPlatformBrowser(this.platformId)) {
      let currentUserValue = localStorage.getItem('currentUser');
      if (currentUserValue) {
        this.currentUser = JSON.parse(currentUserValue);
        this.UserObj$.next(this.currentUser)
        // console.log(this.UserObj$.value);
      }
      const loginFlag = JSON.parse(localStorage.getItem('userLoginFormFlag'));
      if (loginFlag) {
        this.UserLoginFlag = JSON.parse(loginFlag);
      }
  
      }
    }
  loginDetails(): Observable<LoginDetailsModel> {
    return this.UserObj$.asObservable();
  }

  getSingUp(loginDetailsModel: LoginDetailsModel) {
    let loginDetailsModels = this.user.find((x => x.email === loginDetailsModel.email));

    if (loginDetailsModels != null) {
      alert("This email is already in register ")
    }
    else {
      this.user.push(loginDetailsModel);
      localStorage.setItem('Users', JSON.stringify(this.user));

      this.UserLoginFlag = true;
      localStorage.setItem('userLoginFormFlag', JSON.stringify(this.UserLoginFlag));
      this.currentUser = loginDetailsModel;
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.UserObj$.next(this.currentUser)
      // console.log(this.UserObj$.value);
    }
  }

  getLogin(LoginFormModels: LoginFormModels) {
    let findTheEmail = this.user.find((x => x.email === LoginFormModels.email))
    if (findTheEmail != null) {
      if (findTheEmail.Password === LoginFormModels.Password) {
        this.UserLoginFlag = true;
        alert("Login successfull")
        localStorage.setItem('userLoginFormFlag', JSON.stringify(this.UserLoginFlag));
        this.currentUser = findTheEmail;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.UserObj$.next(this.currentUser);
      }
      else {
        alert("password Incorrect")
      }
    }
    else {
      alert("email not found")
    }
  }

}


