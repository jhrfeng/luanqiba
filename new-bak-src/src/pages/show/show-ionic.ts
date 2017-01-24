import { AlertController } from 'ionic-angular';

export class Show {
  constructor(public alertCtrl: AlertController) {
  }

  showPrompt() {
    console.log(".....")
    let prompt = this.alertCtrl.create({
      title: 'Login444',
      message: "111",
      // inputs: [
      //   {
      //     name: 'title',
      //     placeholder: 'Title'
      //   },
      // ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}