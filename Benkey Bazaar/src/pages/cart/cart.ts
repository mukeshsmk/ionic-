import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { NavController, Nav } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';
import {Location} from '@angular/common';
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  public i = 1;
  public hide=false;
  public show=true;
  public imgUrrl;

  constructor(public navCtrl: NavController,public nav: Nav,public loadingCtrl: LoadingController,private location: Location) {
   this.imgUrrl = "assets/imgs/cart/cart1.jpg";
  }
  img1(arg){
    this.imgUrrl = arg;
    this.imgUrrl = "assets/imgs/cart/cart1.jpg";
  }
  img2(arg){
    this.imgUrrl = arg;
    this.imgUrrl = "assets/imgs/cart/cart2.jpg";
  }
  img3(arg){
    this.imgUrrl = arg;
    this.imgUrrl = "assets/imgs/cart/cart3.jpg";
  }
  inc() {
    this.i++;
  }
  dec() {
    this.i--;

    if (this.i == 0) {
      this.show=true;
      this.hide=false;
    }
  }

  cart() {
    this.hide=true;
    if (this.i == 0) {
      this.i++;
      this.show=false;
     
      
  }
  }

  addtocart(){
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(LoginPage);
      loading.dismiss();
    }, 1000);
    // setTimeout(() => {
     
    // }, 2000);
  }
  backlast() {
    this.location.back();

    console.log( 'goBack()...' );
  }
  
}
