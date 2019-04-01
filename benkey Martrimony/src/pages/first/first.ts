import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {LoadingController} from 'ionic-angular';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {
   
    constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public nav:Nav) {
      
    setTimeout(()=>{
        this.nav.setRoot(HomePage) ;
   },3000);
  }
 
}
  
