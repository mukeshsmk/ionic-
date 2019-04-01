import { Component} from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  public authForm :any ={};
  LN: any = {};
  constructor(public navCtrl: NavController,public nav: Nav,private http: HTTP) {
  
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
     
     this.LN = result.user.Location;
    this.authForm.Street=this.LN.Street;
    this.authForm.City=this.LN.City;
    this.authForm.State=this.LN.State;
    this.authForm.PIN=this.LN.PIN;
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



