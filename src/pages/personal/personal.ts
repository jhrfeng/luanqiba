import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { PersonalEditPage } from '../personal/personalEdit';

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html'
})
export class PersonalPage {
	isChange: boolean = false;//头像是否改变标识
    avatarPath: string = './assets/img/aca.jpg';//用户默认头像
    imageBase64: string;//保存头像base64,用于上传

	constructor(public navCtrl: NavController) 
	{

	}
	   
	goBack(){
	  this.navCtrl.setRoot(HelloIonicPage);
	}

	edit(){
		this.navCtrl.push(PersonalEditPage);
	}

}