import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';

import { FaqprofilePage } from '../../pages/faqprofile/faqprofile';
import { FaqmembershipPage } from '../../pages/faqmembership/faqmembership';
import { FaqcontactPage } from '../../pages/faqcontact/faqcontact';
import { FaqsearchPage } from '../../pages/faqsearch/faqsearch';
import { FaqprivacyPage } from '../../pages/faqprivacy/faqprivacy';



@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html'
})
export class FaqPage {
 
  constructor(public navCtrl: NavController,public nav:Nav) {
  }

  gotofaqprofile(){
    setTimeout(()=>{
        this.nav.push(FaqprofilePage) ;
   }),1000;
  }

  gotofaqmembership(){
    setTimeout(()=>{
        this.nav.push(FaqmembershipPage) ;
   }),1000;
  }

  gotofaqcontact(){
    setTimeout(()=>{
        this.nav.push(FaqcontactPage) ;
   }),1000;
  }

  gotofaqsearch(){
    setTimeout(()=>{
        this.nav.push(FaqsearchPage) ;
   }),1000;
  }

  gotofaqprivacy(){
    setTimeout(()=>{
        this.nav.push(FaqprivacyPage) ;
   }),1000;
  }
}
