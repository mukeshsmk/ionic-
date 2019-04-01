import { Component } from '@angular/core';
import {NavController ,Nav} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { ProfiledetailsPage } from '../../pages/profiledetails/profiledetails';
@Component({
  selector: 'page-nearyou',
  templateUrl: 'nearyou.html'
})
export class NearyouPage {

  constructor(public navCtrl: NavController,public nav:Nav,public alerCtrl: AlertController) {
    
   }


  // ngOnInit() {
  //   let confirm = this.alerCtrl.create({

  //     message: "For best results, turn on device location,which uses Google's location sevice.",
  //     buttons: [
  //       {
  //         text: 'CANCEL',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         handler: () => {
  //           this.openNativeSettings.open('location');
  //           console.log('Agree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present()
  // }

  gotoprofiledetails(){
    setTimeout(()=>{
        this.nav.push(ProfiledetailsPage) ;
   }),1000;
  }

}