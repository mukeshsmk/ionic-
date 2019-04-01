
import { NavController, Nav } from 'ionic-angular';
import { Component ,ViewChild,ElementRef} from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';

import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-editprofileown',
  templateUrl: 'editprofileown.html'
})
export class EditprofileownPage {
    @ViewChild('myInput') myInput: ElementRef;
    
    public authForm :any ={};
    user:any = {};
  constructor(public navCtrl: NavController,public nav: Nav, private http: HTTP,public storage: Storage) {
   
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
     })
    }
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
}
save(){
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