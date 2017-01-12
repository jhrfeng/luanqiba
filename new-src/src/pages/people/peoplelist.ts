import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleDetailPage } from '../people/peopleDetail';


@Component({
  selector: 'page-peoplelist',
  templateUrl: 'peoplelist.html'
})
export class PeoplelistPage {
  
	constructor(public navCtrl: NavController) 
	{

	}
	   
	goBack(){
	    this.navCtrl.pop();
	}

	detailTapped(event, item) {
	    this.navCtrl.push(PeopleDetailPage, {
	      item: item
	    });
	  }

	
}