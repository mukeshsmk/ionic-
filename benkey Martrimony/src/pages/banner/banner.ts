import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { FirstPage } from '../../pages/first/first';
@Component({
  selector: 'page-banner',
  templateUrl: 'banner.html'
})
export class BannerPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public nav: Nav) {

  }
  ngOnInit() {
    let loading = this.loadingCtrl.create({
      content: 'Accessing your profile'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(FirstPage);
    }, 2000);
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

}
