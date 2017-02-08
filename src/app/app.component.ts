import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { CalculateIonicPage } from '../pages/calculate/calculate-ionic';
import { FloorPage } from '../pages/floor/floor';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { PeoplePage } from '../pages/people/people';
import { PersonalPage } from '../pages/personal/personal';

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
      { icon:'ios-cash-outline', title: '历史行情', component: ListPage },
      { icon:'ios-thumbs-up-outline', title: '炫耀走廊', component: FloorPage },
      { icon:'ios-people-outline', title: '大咖说', component: PeoplePage },
      { icon:'ios-calculator-outline', title: '收益测算', component: CalculateIonicPage },
      // { icon:'ios-cash-outline', title: '充值服务', component: ServePage },
      { icon:'ios-contact-outline', title: '关于我们', component: AboutPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      StatusBar.show();
      // Splashscreen.hide();
      //if(navigator && navigator.splashscreen) {
      if(Splashscreen){
        setTimeout(()=> {
          Splashscreen.hide();
        }, 100);
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  loginOut(){
    this.menu.close();
    this.nav.setRoot(LoginPage);
  }

  personal(){
    this.menu.close();
    this.nav.setRoot(PersonalPage);
  }
}










// import { Config } from 'ionic-angular';
// import { TranslateService } from 'ng2-translate';

// ...

// constructor( translate: TranslateService, private config: Config ) {
//     this.translate.setDefaultLang('no_nb');
//     this.translate.use('no_nb');
//     this.initializeApp();

// }

// initializeApp() {
//     this.platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//       this.translate.get('BACK').subscribe((res: string) => {
//         // Let android keep using only arrow
//         this.config.set('ios', 'backButtonText', res);
//        // To cange label for all platforms: this.config.set('backButtonText', res);
//       });
//     });
//   }
