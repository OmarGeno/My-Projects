import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../general'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  profileinfo: ProfileInfo;
  constructor() {
    this.profileinfo = {
      fullName: 'Jhon Doe',
      phoneNum: "0721342233",
      email: 'name22@gmail.com',
      residence: 'Bucharest Romania',
      check: false,
      style: {
        bg: 'lightblue',
        fSize: '14px',
        fColor: 'rgb(40, 110, 140)',
      },
    }
  }
  
  skills = ['Organized', 'Great mindset'];
  proExperiences = ['Managment', 'Business'];
  
  ngOnInit(): void {}
  
  ToggleAccept() {
    this.profileinfo.check = !this.profileinfo.check
  }

  title = "Hello, I'm";
}
