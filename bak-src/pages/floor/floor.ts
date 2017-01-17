import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {
  
  	constructor(public alertCtrl: AlertController) {

  	}
 
	showPrompt() {
	    let prompt = this.alertCtrl.create({
	      title: '回复',
	      message: "",
	      inputs: [
	        {
	          name: 'content',
	          placeholder: '内容'
	        },
	      ],
	      buttons: [
	        {
	          text: '取消',
	          handler: data => {
	          	console.log(data);
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: '保存',
	          handler: data => {
	          	console.log(data);
	            console.log('Saved clicked');
	          }
	        }
	      ]
	    });
	    prompt.present();
	  }
	}