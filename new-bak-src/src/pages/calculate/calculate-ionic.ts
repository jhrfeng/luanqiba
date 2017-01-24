import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ValidateUtil } from '../../utils/validate/validate';

@Component({
  providers: [ValidateUtil],
  selector: 'page-calculate-ionic',
  templateUrl: 'calculate-ionic.html'
})
export class CalculateIonicPage {
	glod: any = {};
  card: boolean = false;
  cardOne: boolean = false;
  cardTwo: boolean = false;

	constructor(public validateUtil: ValidateUtil, public alertCtrl: AlertController) {

	}

  showAlert(title, subTitle, buttons) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: subTitle,
        buttons: buttons
    });
    alert.present();
  }

  calculate(){
    if(this.validateUtil.isNumber(this.glod.originPrice) 
        && this.validateUtil.isNumber(this.glod.numg)){
      if(this.validateUtil.isNumber(this.glod.futruePrice)){
        this.card = true;
        this.cardOne = true;
        this.glod.totalPrice = ((Number(this.glod.futruePrice) - Number(this.glod.originPrice)) * Number(this.glod.numg)).toFixed(2);
      }
      if(this.validateUtil.isNumber(this.glod.profit)){
        this.card = true;
        this.cardTwo = true;
        this.glod.futrueNumg = (Number(this.glod.profit)/Number(this.glod.numg) + Number(this.glod.originPrice)).toFixed(2)
      }
    }else{
      this.showAlert("提示","请输入正确黄金单价或克数", ['确认'])
    }
  }
}
