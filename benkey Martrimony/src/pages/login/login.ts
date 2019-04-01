import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { ComingsoonPage } from '../../pages/comingsoon/comingsoon';
import { EditPage } from '../../pages/edit/edit';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {};
  public cookie_var:any;

  constructor(public navCtrl: NavController, public nav: Nav, private http: HTTP, private alertCtrl: AlertController,public loadingCtrl: LoadingController) {
    this.cookie_var = "Usercookie";
  }

  
  gotologin() {
    setTimeout(() => {
      this.nav.setRoot(SignupPage);
    }, 1000);
  }

  login() {


    // console.log(this.user);
    // var data1 = {
    //   Email: undefined,
    //   Mobile: undefined,
    //   Password: undefined
    // };
    // if (this.user && this.user.Field.includes('@')) {
    //   data1.Email = this.user.Field;
    // } else {
    //   data1.Mobile = this.user.Field;
    // }
    // data1.Password = this.user.Password;
    
    console.log(data1)
    console.log(this.user)
    var data1 = this.user;
    console.log(data1)
    
    this.http.post('http://68.66.207.110:8020/authenticate', data1,{})
    .then(data => {
      console.log(data)
      let resp = JSON.parse(data["data"]);
      console.log(resp.status)
      if (resp.status == "Success" ) {
          var string = this.http.getCookieString('http://68.66.207.110:8020/authenticate');
                  
          localStorage.setItem("Usercookie", string);
          
          console.log('i am in')
          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
            });loading.present();
            setTimeout(() => {
            this.nav.setRoot(EditPage);
            loading.dismiss();
          }, 3000);
        }
        
        else if(resp.status == "LoginFailed"){
          const alert = this.alertCtrl.create({
            title: 'Opps!',
            subTitle: resp.message,
            buttons: ['OK']
          });

          alert.present();
        
        }
          
        
        });
  }

   
}
