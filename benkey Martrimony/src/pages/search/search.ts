import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { InboxPage } from '../../pages/inbox/inbox';
import { HomePage } from '../../pages/home/home';
import { ProfiledetailsPage } from '../../pages/profiledetails/profiledetails';
import { AlertController } from 'ionic-angular';
import { NotificationPage } from '../../pages/notification/notification';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    
  
  constructor(public navCtrl: NavController,public nav: Nav,public alertCtrl: AlertController) {

  }
  gotoinbox(){
    setTimeout(()=>{
        this.nav.push(InboxPage) ;
   });
  }

   gotohome(){
    setTimeout(()=>{
        this.nav.setRoot(HomePage) ;
   }),1000;
  }

  gotoprofiledetails(){
    setTimeout(()=>{
        this.nav.push(ProfiledetailsPage) ;
   }),1000;
  }


  gotonotification(){
    setTimeout(()=>{
        this.nav.setRoot(NotificationPage) ;
   }),1000;
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Save search',
      message: "Enter Search Name",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
  
}
