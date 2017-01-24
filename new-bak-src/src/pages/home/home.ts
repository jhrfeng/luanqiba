import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {NativeService} from "../../providers/NativeService";

@Component({
  templateUrl: 'home.html',
})
export class HomePage {

isChange: boolean = false;//头像是否改变标识
      avatarPath: string = './assets/img/qr_code.png';//用户默认头像
      imageBase64: string;//保存头像base64,用于上传

      constructor(private viewCtrl: ViewController,
                  private nativeService: NativeService) {
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
          this.viewCtrl.dismiss({avatarPath: this.avatarPath});//这里可以把头像传出去.
        } else {
          this.dismiss();
        }
      }

      dismiss() {
        this.viewCtrl.dismiss();
      }

}