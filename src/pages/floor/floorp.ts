import { Component } from '@angular/core';
import { AlertController, NavController, ActionSheetController, ViewController } from 'ionic-angular';
import {NativeService} from "../../providers/NativeService";


@Component({
  selector: 'page-floorp',
  templateUrl: 'floorp.html'
})
export class FloorpPage {
	isChange: boolean = false;//头像是否改变标识
    avatarPath: string = './assets/img/aca.jpg';//用户默认头像
    imageBase64: string;//保存头像base64,用于上传
  
  	constructor(public alertCtrl: AlertController,
  			    public navCtrl: NavController,
  			    public actionSheetCtrl: ActionSheetController,
  			    private viewCtrl: ViewController,
            private nativeService: NativeService) 
  	{

  	}
	   
	goBack(){
	    this.navCtrl.pop();
	}

	public getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 800,
     	targetHeight: 900
    };
    if (type == 1) {
      	this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    } else {
      	this.nativeService.getPictureByPhotoLibrary(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }

  private getPictureSuccess(imageBase64) {
      this.isChange = true;
      this.imageBase64 = <string>imageBase64;
      this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
      console.log("replace......")
  }

  saveAvatar() {
      if (this.isChange) {
        	console.log(this.imageBase64);//这是头像数据.
        	this.nativeService.showLoading('正在上传....');
        	this.viewCtrl.dismiss({avatarPath: this.avatarPath});//这里可以把头像传出去.
      } else {
        	this.dismiss();
      }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

	presentActionSheet() {
	    let actionSheet = this.actionSheetCtrl.create({
		    title: '上传照片(限制单张)',
		    buttons: [
		        {
			        text: '选择相册',
			        role: 'destructive',
			        handler: () => {
			           this.getPicture(0);
			        }
		        },{
		            text: '选择照相',
		            handler: () => {
		            	this.getPicture(1);
		            }
		        },{
		            text: '取消',
		            role: 'cancel',
		            handler: () => {
		            	console.log('Cancel clicked');
		            }
		        }
		      ]
	    });
	    actionSheet.present();
  }

  publish() {
    this.saveAvatar() //保存照片
  }
	
}