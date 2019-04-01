import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-partnerbasicdetails',
  templateUrl: 'partnerbasicdetails.html'
})
export class PartnerbasicdetailsPage {

  public authForm: any = {};
  P_BD: any = {};
  constructor(public navCtrl: NavController, public nav: Nav, private http: HTTP) {
 }

 ionViewDidEnter(){
  var cookie = localStorage.getItem("Usercookie");
  this.http.setCookie('http://68.66.207.110:8020/getMyProfile', cookie)
  let DDlist = 'http://68.66.207.110:8020/getMyProfile';
  console.log(DDlist);
  this.http.get(DDlist,{},{})
  .then(data=>{
   let result = JSON.parse(data.data);
   console.log(result);
   
   this.P_BD = result.user.PARTNER_PREFERENCE.Basic_Details;
  this.authForm.PARTNER_Age_From=this.P_BD.Age_From;
  this.authForm.PARTNER_Age_To=this.P_BD.Age_To;
  this.authForm.PARTNER_Marrial_Status=this.P_BD.Marrial_Status;
  this.authForm.PARTNER_Height_From=this.P_BD.Height_From;
  this.authForm.PARTNER_Height_To=this.P_BD.Height_To;
  this.authForm.PARTNER_Weight_From=this.P_BD.Weight_From;
  this.authForm.PARTNER_Weight_To=this.P_BD.Weight_To;
  this.authForm.PARTNER_Language=this.P_BD.Language;
  this.authForm.PARTNER_Physical_Status=this.P_BD.Physical_Status;
  this.authForm.PARTNER_Eating_Habits=this.P_BD.Eating_Habits;
  this.authForm.PARTNER_Drinking_Habits=this.P_BD.Drinking_Habits;
  this.authForm.PARTNER_Smoking_Habits=this.P_BD.Smoking_Habits;
})
  }

  save() {

    var cookie = localStorage.getItem("Usercookie");
    var myDataone = this.authForm;
    console.log(myDataone)
    this.http.setCookie('http://68.66.207.110:8020/updateProfile', cookie)
    this.http.post('http://68.66.207.110:8020/updateProfile', myDataone, {})
      .then(data => {
        console.log(data.data)
        this.nav.setRoot(EditPage);
      });
  }
}


