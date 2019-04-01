import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { ProfiledetailsPage } from '../../pages/profiledetails/profiledetails';

@Component({
    selector: 'page-blockedprofiles',
    templateUrl: 'blockedprofiles.html'
})
export class BlockedprofilesPage {
 
  constructor(public navCtrl: NavController,public nav:Nav) {
  }
  
  gotoprofiledetails(){
    setTimeout(()=>{
        this.nav.push(ProfiledetailsPage) ;
   }),1000;
  }
}
