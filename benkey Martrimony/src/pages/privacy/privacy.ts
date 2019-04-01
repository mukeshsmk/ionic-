import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';

import { IgnoredprofilesPage } from '../../pages/ignoredprofiles/ignoredprofiles';
import { ContactfilterPage } from '../../pages/contactfilter/contactfilter';
import { BlockedprofilesPage } from '../../pages/blockedprofiles/blockedprofiles';
import { PhoneprivacyPage } from '../../pages/phoneprivacy/phoneprivacy';

@Component({
    selector: 'page-privacy',
    templateUrl: 'privacy.html'
})
export class PrivacyPage {
 
  constructor(public navCtrl: NavController,public nav:Nav) {
  }
  gotoignoredprofiles(){
    setTimeout(()=>{
        this.nav.push(IgnoredprofilesPage) ;
   }),1000;
  }

   gotocontactfilter(){
    setTimeout(()=>{
        this.nav.push(ContactfilterPage) ;
   }),1000;
  }
  

  gotoblockedprofiles(){
    setTimeout(()=>{
        this.nav.push(BlockedprofilesPage) ;
   }),1000;
  }
  gotophoneprivacy(){
    setTimeout(()=>{
        this.nav.push(PhoneprivacyPage) ;
   }),1000;
  }

}
