import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalculateIonicPage } from '../pages/calculate/calculate-ionic';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { FloorPage } from '../pages/floor/floor';
import { FloorpPage } from '../pages/floor/floorp';
import { ServePage } from '../pages/serve/serve';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgetPage } from '../pages/forget/forget';
import { PeoplePage } from '../pages/people/people';
import { PeoplepPage } from '../pages/people/peoplep';
import { PeoplelistPage } from '../pages/people/peoplelist';
import { PeopleDetailPage } from '../pages/people/peopleDetail';
import { PersonalPage } from '../pages/personal/personal';
import { PersonalEditPage } from '../pages/personal/personalEdit';

import { ValidateUtil } from '../utils/validate/validate';
import { IProbar } from '../components/i-probar/i-probar';

import { NativeService } from '../providers/NativeService';
import { HttpService } from '../providers/HttpService';


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
    LoginPage,
    FloorpPage,
    RegisterPage,
    ForgetPage,
    PeoplePage,
    PeoplepPage,
    PeoplelistPage,
    PeopleDetailPage,
    PersonalPage,
    PersonalEditPage
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
    LoginPage,
    FloorpPage,
    RegisterPage,
    ForgetPage,
    PeoplePage,
    PeoplepPage,
    PeoplelistPage,
    PeopleDetailPage,
    PersonalPage,
    PersonalEditPage
  ],
  providers: [ValidateUtil, {provide: ErrorHandler, useClass: IonicErrorHandler}, NativeService, HttpService]
})
export class AppModule {}
