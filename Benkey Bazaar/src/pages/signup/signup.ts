import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../../pages/login/login';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController,public nav: Nav,public loadingCtrl: LoadingController,private storage: Storage) {
  

  }
  gotologin() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(LoginPage);
    }, 1000);
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  
  submit(login){
    localStorage.setItem('color','red');
    console.log(login);
  }
}
