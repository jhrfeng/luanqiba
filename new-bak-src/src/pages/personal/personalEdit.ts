import { Component } from '@angular/core';
import { NavController, ViewController, ActionSheetController } from 'ionic-angular';
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";

@Component({
  selector: 'page-personalEdit',
  templateUrl: 'personalEdit.html'
})
export class PersonalEditPage {
	isChange: boolean = false;//头像是否改变标识
    avatarPath: string = 'http://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png';//用户默认头像
    imageBase64: string;//保存头像base64,用于上传

	constructor(public navCtrl: NavController,
				private viewCtrl: ViewController,
                private nativeService: NativeService,
                private httpService: HttpService,
                public actionSheetCtrl: ActionSheetController) 
	{

	}

	getPicture(type) {//1拍照,0从图库选择
        let options = {
        	targetWidth: 400,
         	targetHeight: 400
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
    }

    saveAvatar() {
        if (this.isChange) {
          	console.log(this.imageBase64);//这是头像数据.
          	this.nativeService.showLoading('正在上传....');
          	this.httpService.postServer("http://192.168.7.148:3000/uploadImg", {base:this.imageBase64.trim()}, function(res){
          		console.log(res);
          		this.nativeService.hide();
          	})
          	

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

	   
	eidt(){
	  	this.navCtrl.pop();
	}


}