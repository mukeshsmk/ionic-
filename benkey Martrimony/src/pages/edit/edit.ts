import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { LoginPage } from '../../pages/login/login';
import { MembershipPage } from '../../pages/membership/membership';
import { EditprofileownPage } from '../../pages/editprofileown/editprofileown';
import { BasicdetailsPage } from '../../pages/basicdetails/basicdetails';
import { ReligiousPage } from '../../pages/religious/religious';
import { ProfessionalPage } from '../../pages/professional/professional';
import { LocationPage } from '../../pages/location/location';
import { FamilydetailsPage } from '../../pages/familydetails/familydetails';
import { AboutmyfamilyPage } from '../../pages/aboutmyfamily/aboutmyfamily';
import { PartnerbasicdetailsPage } from '../../pages/partnerbasicdetails/partnerbasicdetails';
import { partnerreligiousPage } from '../../pages/partnerreligious/partnerreligious';
import { ProfessionalpreferancePage } from '../../pages/professionalpreferance/professionalpreferance';
import { LocationpreferencePage } from '../../pages/locationpreference/locationpreference';
import { UploadPage } from '../../pages/upload/upload';
import { UploadimgPage } from '../../pages/uploadimg/uploadimg';
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {
  user: any = {};
  picture: any = {};
  LN: any = {};
  FD: any = {};
  RI: any = {};
  PI: any = {};
  P_BD: any = {};
  P_RI: any = {};
  P_LN: any = {};
  P_Desc: any = {};
  public Profile_Picture_Location: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public nav: Nav, private http: HTTP) {


  }


  ionViewDidEnter() {
    var cookie = localStorage.getItem("Usercookie");
    this.http.setCookie('http://68.66.207.110:8020/getMyProfile', cookie)
    let DDlist = 'http://68.66.207.110:8020/getMyProfile';
    console.log(DDlist);
    this.http.get(DDlist, {}, {})
      .then(data => {
        let result = JSON.parse(data.data);
        console.log(result);
        this.user = result.user;
        
        if(result.user.Profile_Picture_Location == undefined && result.user.Profile_Picture_Location == null){
          console.log('h_gender'+result.user.Gender)
          if(result.user.Gender == 'Male'){
            this.picture = 'myimage_41.jpg';
          }
          else{
            this.picture = 'myimage_54.jpg';
          }
        
        }else{
          this.picture = result.user.Profile_Picture_Location;
        }
        console.log('hari_pic'+result.user.Profile_Picture_Location);
        console.log(this.picture);
        this.FD = result.user.Family_Details;
        this.LN = result.user.Location;
        this.RI = result.user.Religious_Information;
        this.PI = result.user.Professional_Information;
        this.P_BD = result.user.PARTNER_PREFERENCE.Basic_Details;
        this.P_RI = result.user.PARTNER_PREFERENCE.Religious_Information;
        this.P_LN = result.user.PARTNER_PREFERENCE.Location;
        this.P_Desc = result.user.PARTNER_PREFERENCE;

        var url = "http://68.66.207.110:8006/getFile/";
        this.http.get(url + this.picture, {}, {})
          .then(data => {  
               let resp = JSON.parse(data.data);
                console.log(this.picture);
          });
      });
  }



  gotomember() {
    setTimeout(() => {
      this.nav.push(MembershipPage);
    }), 1000;
  }

  gotoown() {
    setTimeout(() => {
      this.nav.push(EditprofileownPage);
    }), 1000;
  }

  gotobasicdetail() {
    setTimeout(() => {
      this.nav.push(BasicdetailsPage);
    }), 1000;
  }

  gotoreligious() {
    setTimeout(() => {
      this.nav.push(ReligiousPage);
    }), 1000;
  }

  gotoprofessional() {
    setTimeout(() => {
      this.nav.push(ProfessionalPage);
    }), 1000;
  }

  gotolocation() {
    setTimeout(() => {
      this.nav.push(LocationPage);
    }), 1000;
  }


  gotofamilydetails() {
    setTimeout(() => {
      this.nav.push(FamilydetailsPage);
    }), 1000;
  }

  gotoaboutmyfamily() {
    setTimeout(() => {
      this.nav.push(AboutmyfamilyPage);
    }), 1000;
  }

  gotopartnerbasicdetails() {
    setTimeout(() => {
      this.nav.push(PartnerbasicdetailsPage);
    }), 1000;
  }

  gotopartnerreligious() {
    setTimeout(() => {
      this.nav.push(partnerreligiousPage);
    }), 1000;
  }

  gotoprofessionalpreferance() {
    setTimeout(() => {
      this.nav.push(ProfessionalpreferancePage);
    }), 1000;
  }

  gotolocationpreference() {
    setTimeout(() => {
      this.nav.push(LocationpreferencePage);
    }), 1000;
  }

  gotouploadimg() {
    setTimeout(() => {
      this.nav.push(UploadimgPage);
    }), 1000;
  }



  logout() {

    console.log(this.user)
    var data1 = this.user;
    console.log(data1)
    var string = this.http.getCookieString('http://68.66.207.110:8020/getMyProfile');
    console.log(string);
    this.http.setCookie('http://68.66.207.110:8020/getMyProfile', string)
    localStorage.removeItem('Usercookie');
    let loading = this.loadingCtrl.create({
      content: 'Logout...'
    }); loading.present();
    setTimeout(() => {
      this.nav.setRoot(LoginPage);
      loading.dismiss();
    }, 1000);


  }

}
