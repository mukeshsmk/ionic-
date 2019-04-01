import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'page-comingsoon',
    templateUrl: 'comingsoon.html'
})
export class ComingsoonPage {
  user = {};
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private alertCtrl: AlertController, public nav: Nav,private http: HTTP) {
  }
  gotologout() {
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

  logout(){
    
    console.log(this.user)
    var data1 = this.user;
    console.log(data1)
    var string = this.http.getCookieString('http://68.66.207.110:8020/authenticate');
    console.log(string);
    this.http.setCookie('http://68.66.207.110:8020/authenticate',string)
    localStorage.removeItem('Usercookie');
    let loading = this.loadingCtrl.create({
    content: 'Logout...'
    });loading.present();
    setTimeout(() => {
    this.nav.setRoot(LoginPage);
    loading.dismiss();
    }, 1000);
        
      
  }

}