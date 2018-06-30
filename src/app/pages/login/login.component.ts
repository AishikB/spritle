import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  checked: boolean;
  @Output()
  change: EventEmitter<any>
  router:Router;
  userExists = false;
  hideLogout = false;
  registeredUser = ["Aishik","Sriram"];
  constructor(router:Router, private loginService:LoginService) { 
    this.router = router;
  }

  ngOnInit() {
    this.checked = false;
  }

  username = '';
  password = '';
  flag = false;
  pass_type = "password";
  newUser = '';

  onLogin() {
    console.log("login")
    for(let user of this.registeredUser) {
      if(this.username === user) {
    if(this.username === this.password && this.username != '') {
      this.loginService.username = this.username;
      this.router.navigate(['/home']);
    }
    else this.flag = true;
  }
  }
  }

  showPassword() {
    if(this.checked === true) {
    this.pass_type="text";
    }
    else this.pass_type = "password";
  }

  onRegistration() {
    this.userExists = false;
    for(let user of this.registeredUser) {
      if(this.newUser === user) {
        this.userExists = true;
        break;
      }
    }
    if(this.userExists === false) {
      this.registeredUser.push(this.newUser);
      alert('User added successfully');
    }
  }

}
