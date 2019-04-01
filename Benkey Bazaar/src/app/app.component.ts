import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FirstPage } from '../pages/first/first';
import { MembershipPage } from '../pages/membership/membership';
import { VendorPage } from '../pages/vendor/vendor';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { SignupPage } from '../pages/signup/signup';
import { MapPage } from '../pages/map/map';
import { LoadingPage } from '../pages/loading/loading';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: FirstPage },
      { title: 'Vendor', component: VendorPage },
      { title: 'Product', component: ProductPage },
      { title: 'Cart', component: CartPage },
      { title: 'Menu', component: MenuPage },
      { title: 'Membership', component: MembershipPage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Map', component: MapPage },
      { title: 'login', component: LoginPage },
      { title: 'signup', component: SignupPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
