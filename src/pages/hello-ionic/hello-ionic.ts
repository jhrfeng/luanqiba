import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {ServerService} from "../../providers/ServerService";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	agree: string = "80";
	gold: any = {latestpri:0, openpri:0, yespri:0};
	usaMoney: any = {openPri:0, yesPic:0, buyPic:0};

	constructor(public navCtrl: NavController,
		        public server: ServerService) {
	  	this.initData();
	}

	initData(){
		// 黄金价格
		this.server.getGold().then(res=>{
  			if(res.reason=="SUCCESSED!"){
  				this.gold = res.result[0][4];
  				console.log(this.gold);
  			}
	    })
	    // 美元价格
	    this.server.getUsaMoney().then(res=>{
  			if(res.reason=="SUCCESSED!"){
  				this.usaMoney = res.result[0]["data2"];
  			}
	    })		
	}

	openHistory(){
	    // navigate to the new page if it is not the current page
	    this.navCtrl.push(ListPage);
	}


}
