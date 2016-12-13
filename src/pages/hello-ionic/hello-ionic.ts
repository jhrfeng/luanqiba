import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	agree: string = "80";
	constructor(public navCtrl: NavController) {
	  	
	}

	openHistory(){
	    // navigate to the new page if it is not the current page
	    this.navCtrl.push(ListPage);
	}
}
