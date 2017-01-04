import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pet: string = "listInfo";
  isAndroid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    //this.isAndroid = platform.is('android');
  }
  
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  goBack(){
    this.navCtrl.pop();
  }
}
