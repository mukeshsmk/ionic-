import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { MenuPage } from '../pages/menu/menu';
import { VendorPage } from '../pages/vendor/vendor';
import { MembershipPage } from '../pages/membership/membership';
import { ListPage } from '../pages/list/list';
import { FirstPage } from '../pages/first/first';
import { SignupPage } from '../pages/signup/signup';
import { MapPage } from '../pages/map/map';
import { LoadingPage } from '../pages/loading/loading';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicStorageModule } from '@ionic/storage';


import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AgmCoreModule } from '@agm/core';
import { LocationService } from '@ionic-native/google-maps';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CartPage,
    MenuPage,
    ProductPage,
    VendorPage,
    MembershipPage,
    FirstPage,
    ListPage,
    SignupPage,
    MapPage,
    LoadingPage,
    TabsPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      navExitApp: false
    }),
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD--J6nWpYUEde0NUbhG4FoapdgcuwiqAo",
      libraries: ["cities"],
      
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CartPage,
    MenuPage,
    ProductPage,
    VendorPage,
    MembershipPage,
    FirstPage,
    ListPage,
    SignupPage,
    MapPage,
    LoadingPage,
    TabsPage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
