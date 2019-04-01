import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-partnerreligious',
  templateUrl: 'partnerreligious.html'
})
export class partnerreligiousPage {


  public authForm: any = {};
  P_RI: any = {};
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
   
  this.P_RI = result.user.PARTNER_PREFERENCE.Religious_Information;
  this.authForm.PARTNER_Religion=this.P_RI.Religion;
  this.authForm.PARTNER_Caste=this.P_RI.Caste;
  this.authForm.PARTNER_Gothram=this.P_RI.Gothram;
  this.authForm.PARTNER_Star=this.P_RI.Star;
  this.authForm.PARTNER_Raasi=this.P_RI.Raasi;
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
