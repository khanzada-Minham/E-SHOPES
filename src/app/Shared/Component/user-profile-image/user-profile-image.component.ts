import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrl: './user-profile-image.component.css'
})
export class UserProfileImageComponent {
  addcolor(){
    console.log('hello');
  }
}
