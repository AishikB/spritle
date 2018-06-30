import { Injectable } from '@angular/core';
import {LoginService} from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private loginService:LoginService) { }

  getUser() {
    return this.loginService.username;
  }
}
