import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { MembershipPage } from '../../pages/membership/membership';
@Component({
  selector: 'page-profiledetails',
  templateUrl: 'profiledetails.html'
})
export class ProfiledetailsPage {

  constructor(public navCtrl: NavController,public nav: Nav) {


}
gotomember(){
  setTimeout(()=>{
    this.nav.push(MembershipPage) ;
}),1000;
}
}
