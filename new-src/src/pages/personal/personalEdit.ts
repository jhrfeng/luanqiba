import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personalEdit',
  templateUrl: 'personalEdit.html'
})
export class PersonalEditPage {
	isChange: boolean = false;//头像是否改变标识
    avatarPath: string = './assets/img/aca.jpg';//用户默认头像
    imageBase64: string;//保存头像base64,用于上传

	constructor(public navCtrl: NavController) 
	{

	}
	   
	eidt(){
	  this.navCtrl.pop();
	}


}