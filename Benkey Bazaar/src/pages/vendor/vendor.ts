import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ProductPage } from '../../pages/product/product';
import {Location} from '@angular/common';


@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html'
})
export class VendorPage {

  constructor(public navCtrl: NavController,public nav: Nav,public loadingCtrl: LoadingController,private location: Location) {

  }

  gotoproduct() {
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
  
    loading.present();
    setTimeout(() => {
      this.nav.setRoot(ProductPage);
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
