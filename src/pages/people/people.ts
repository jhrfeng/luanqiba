import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { PeoplepPage } from '../people/peoplep';
import { PeoplelistPage } from '../people/peoplelist';
import { PeopleDetailPage } from '../people/peopleDetail';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {
  pet: string = "common";
  isAndroid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    //this.isAndroid = platform.is('android');
  }
  
  peopleTapped(event, item) {
    this.navCtrl.push(PeoplelistPage, {
      item: item
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(PeoplepPage, {
      item: item
    });
  }

  detailTapped(event, item) {
    this.navCtrl.push(PeopleDetailPage, {
      item: item
    });
  }

  goBack(){
    this.navCtrl.pop();
  }
}
