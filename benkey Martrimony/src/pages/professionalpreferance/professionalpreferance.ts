import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-professionalpreferance',
  templateUrl: 'professionalpreferance.html'
})
export class ProfessionalpreferancePage {
  
  public authForm :any ={};
  constructor(public navCtrl: NavController,public nav: Nav,private fb: FormBuilder,private http: HTTP) {
 
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





