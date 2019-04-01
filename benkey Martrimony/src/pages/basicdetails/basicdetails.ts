import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { FormGroup, FormBuilder } from "@angular/forms";


import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-basicdetails',
  templateUrl: 'basicdetails.html'
})
export class BasicdetailsPage {


  public authForm: any = {};
  user:any = {};
  constructor(public navCtrl: NavController, public nav: Nav, private http: HTTP, private fb: FormBuilder) {


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
     this.user = result.user;
     this.authForm.Gender =result.user.Gender;
     this.authForm.Height =result.user.Height;
     this.authForm.Weight =result.user.Weight;
     this.authForm.Marrial_Status =result.user.Marrial_Status;
     this.authForm.Language =result.user.Language;
     this.authForm.Physical_Status =result.user.Physical_Status;
     this.authForm.Body_Type =result.user.Body_Type;
     this.authForm.Profile_Created_For =result.user.Profile_Created_For;
     this.authForm.Eating_Habits =result.user.Eating_Habits;
     this.authForm.Drinking_Habits =result.user.Drinking_Habits;
     this.authForm.Smoking_Habits =result.user.Smoking_Habits;

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

