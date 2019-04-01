import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { SettingsnotificationPage } from '../../pages/settingsnotification/settingsnotification';
import { AccountPage } from '../../pages/account/account';
import { PrivacyPage } from '../../pages/privacy/privacy';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController,public nav: Nav) {

  }
  gotosettingsnotification(){
    setTimeout(() => {
        this.nav.push(SettingsnotificationPage);
      }, 1000);
  }
  gotoaccount(){
    setTimeout(() => {
        this.nav.push(AccountPage);
      }, 1000);
  }
  gotoprivacy(){
    setTimeout(() => {
        this.nav.push(PrivacyPage);
      }, 100);
  }
}
