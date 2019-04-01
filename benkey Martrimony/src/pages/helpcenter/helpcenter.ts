import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';


import { FeedbackPage } from '../../pages/feedback/feedback';
import { BranchlocatorPage } from '../../pages/branchlocator/branchlocator';
import { FaqPage } from '../../pages/faq/faq';


@Component({
    selector: 'page-helpcenter',
    templateUrl: 'helpcenter.html'
})
export class HelpcenterPage {
 
  constructor(public navCtrl: NavController,public nav:Nav) {
  }

  gotofeedback(){
    setTimeout(()=>{
        this.nav.push(FeedbackPage) ;
   }),1000;
  }

  gotobranches(){
    setTimeout(()=>{
        this.nav.push(BranchlocatorPage) ;
   }),1000;
  }

  gotofaq(){
    setTimeout(()=>{
        this.nav.push(FaqPage) ;
   }),1000;
  }

}
