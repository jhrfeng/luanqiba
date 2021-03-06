import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalculateIonicPage } from '../pages/calculate/calculate-ionic';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { FloorPage } from '../pages/floor/floor';
import { ServePage } from '../pages/serve/serve';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';

import { ValidateUtil } from '../utils/validate/validate';
import { IProbar } from '../components/i-probar/i-probar'


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CalculateIonicPage,
    HomePage,
    IProbar,
    FloorPage,
    ServePage,
    AboutPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CalculateIonicPage,
    HomePage,
    FloorPage,
    ServePage,
    AboutPage,
    LoginPage
  ],
  providers: [ValidateUtil, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
