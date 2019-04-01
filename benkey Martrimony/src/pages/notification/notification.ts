import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { InboxPage } from '../../pages/inbox/inbox';
import { ProfiledetailsPage } from '../../pages/profiledetails/profiledetails';
import { FirstPage } from '../../pages/first/first';
import { SearchPage } from '../../pages/search/search';
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController,public nav: Nav) {

  }
  gotoinbox(){
    setTimeout(()=>{
        this.nav.push(InboxPage) ;
   });
  }

   gotohome(){
    setTimeout(()=>{
        this.nav.setRoot(HomePage) ;
   });
  }

  gotoprofiledetails(){
    setTimeout(()=>{
        this.nav.push(ProfiledetailsPage) ;
   }),1000;
  }
  


  // gotonotification(){
  //   setTimeout(()=>{
  //       this.nav.setRoot(NotificationPage) ;
  //  }),1000;
  // }

  // gotoprofiledetails(){
  //   setTimeout(()=>{
  //       this.nav.push(ProfiledetailsPage) ;
  //  }),1000;
  
  // }

  
  gotosearch(){
    setTimeout(()=>{
        this.nav.setRoot(SearchPage) ;
   }),1000;
  }

  gotofirst(){
    setTimeout(()=>{
        this.nav.push(FirstPage) ;
   }),1000;
  }
}
