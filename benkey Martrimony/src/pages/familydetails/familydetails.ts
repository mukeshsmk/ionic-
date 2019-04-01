import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { EditPage } from '../../pages/edit/edit';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
@Component({
  selector: 'page-familydetails',
  templateUrl: 'familydetails.html'
})
export class FamilydetailsPage {

  public authForm: any = {};
  FD: any = {};
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
     
     this.FD = result.user.Family_Details;
    this.authForm.Family_Values=this.FD.Family_Values;
    this.authForm.Family_Type=this.FD.Family_Type;
    this.authForm.Family_Status=this.FD.Family_Status;
    this.authForm.Father_s_Occupation=this.FD.Father_s_Occupation;
    this.authForm.Mother_s_Occupation=this.FD.Mother_s_Occupation;
    this.authForm.Num_of_Brothers=this.FD.Num_of_Brothers;
    this.authForm.Num_of_Sisters=this.FD.Num_of_Sisters;
  })
    }


    save() {
      var cookie = localStorage.getItem("Usercookie");
      var myDataone = this.authForm; 
      console.log(myDataone)
      this.http.setCookie('http://68.66.207.110:8020/updateProfile',cookie)
    this.http.post('http://68.66.207.110:8020/updateProfile', myDataone,{})
        .then(data => {
           console.log(data.data)
           this.nav.setRoot(EditPage);
          });
      }
    }
  
