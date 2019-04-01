import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController,public nav: Nav,public loadingCtrl: LoadingController) {

  }
  gotocart() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(CartPage);
    }, 1000);
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

//   goback() {
//     this.navCtrl.pop();
//     console.log('Click on button Test Console Log');
//  }
  
}