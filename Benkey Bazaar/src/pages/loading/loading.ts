import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';
import {LoadingController} from 'ionic-angular';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {
   
    constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public nav:Nav) {
      
  //   setTimeout(()=>{
  //       this.nav.setRoot(ProductPage) ;
  //  },2000);
  }
 
}
  
