import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-religious',
  templateUrl: 'religious.html'
})
export class ReligiousPage {
 
  public authForm: any = {};
  user:any = {};

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
   this.user = result.user;
  //  this.RI = result.user.Religious_Information;
   this.authForm.Religion =result.user.Religious_Information.Religion;
   this.authForm.Caste =result.user.Religious_Information.Caste;
   this.authForm.Gothram =result.user.Religious_Information.Gothram;
   this.authForm.star =result.user.Religious_Information.Star;
   this.authForm.Raasi =result.user.Religious_Information.Raasi;
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


