import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { SignupPage } from '../../pages/signup/signup';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public nav: Nav,public loadingCtrl: LoadingController) {

  }
  gotosignup() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(SignupPage);
    }, 1000);
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
}
