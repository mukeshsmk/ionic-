
import {NavController ,Nav} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { NearyouPage } from '../../pages/nearyou/nearyou';
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
  
})
export class AlertPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public nav:Nav,public alerCtrl: AlertController,private openNativeSettings: OpenNativeSettings) {
    // let loading = this.loadingCtrl.create({
    //   content: 'Loading...'
    // });
  }


 ngOnInit() {
   let confirm = this.alerCtrl.create({
     

     message: "For best results, turn on device location,which uses Google's location sevice.",
     buttons: [
       {
         text: 'CANCEL',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'OK',
         handler: () => {
           this.openNativeSettings.open('location');
           
           setTimeout(()=>{
             this.nav.push(NearyouPage) ;
             
        }),3000;
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present()
 }


}