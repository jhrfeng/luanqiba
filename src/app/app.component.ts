import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { CalculateIonicPage } from '../pages/calculate/calculate-ionic';
import { HomePage } from '../pages/home/home';
import { FloorPage } from '../pages/floor/floor';


@Component({
  selector: 'page-index-ionic',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{icon:string, title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { icon:'ios-home-outline', title: '首页', component: HelloIonicPage },
      { icon:'ios-thumbs-up-outline', title: '炫耀走廊', component: FloorPage },
      { icon:'ios-people-outline', title: '大伽说', component: ListPage },
      { icon:'ios-calculator-outline', title: '收益测算', component: CalculateIonicPage },
      { icon:'ios-cash-outline', title: '充值服务', component: ListPage },
      { icon:'ios-contact-outline', title: '关于我们', component: ListPage },
    
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
