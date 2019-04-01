import { Component} from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';


import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-locationpreference',
  templateUrl: 'locationpreference.html'
})
export class LocationpreferencePage {
  public authForm :any ={};
  P_LN: any = {};
  constructor(public navCtrl: NavController,public nav: Nav,private fb: FormBuilder,private http: HTTP) {

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
     
     this.P_LN = result.user.PARTNER_PREFERENCE.Location;
    this.authForm.PARTNER_City=this.P_LN.City;
    this.authForm.PARTNER_State=this.P_LN.State;
    this.authForm.PARTNER_PIN=this.P_LN.PIN;
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



