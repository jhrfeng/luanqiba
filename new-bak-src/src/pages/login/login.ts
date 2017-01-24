import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ForgetPage } from '../forget/forget';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  forget(){
    this.navCtrl.push(ForgetPage);
  }

  goBack(){
     this.navCtrl.setRoot(HelloIonicPage);
  }

}