import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../../pages/login/login';


import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
   
    public gender: any;
    public country: any;
    public religion: any;
    public cast: any;
    public language: any;
    public city: any;
    public state: any;

    authForm : FormGroup;
    

  constructor(public navCtrl: NavController, public nav: Nav, private http: Http,private fb: FormBuilder) {
    this.authForm = fb.group({
      'Name': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'Profile_Created_For':[null,Validators.compose([Validators.required])],
      'Password': [null, Validators.compose([Validators.required, Validators.minLength(8) ])],
      'Email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
      'Religion':[null,Validators.compose([Validators.required])],
      'PIN':[null,Validators.compose([Validators.required])],
      'City':[null,Validators.compose([Validators.required])],
      'State':[null,Validators.compose([Validators.required])],
      'Gender':[null,Validators.compose([Validators.required])],
      'Eating_Habits':[null,Validators.compose([Validators.required])],
      'Drinking_Habits':[null,Validators.compose([Validators.required])],
      'Smoking_Habits':[null,Validators.compose([Validators.required])],

      'Mobile': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'Language': [null, Validators.compose([Validators.required])],
     
    });

}


  ionViewDidEnter(){
    let DDlist = 'http://68.66.207.110:8020/GetDDList';
    console.log(DDlist);
    this.http.get(DDlist)
    .subscribe(data=>{
     let result = JSON.parse(data["_body"]);

     this.city = result.user[0].City; 
     this.state = result.user[0].State; 
     this.country = result.user[0].Country; 
     this.religion = result.user[0].Religion; 
     this.cast = result.user[0].Cast; 
     this.language = result.user[0].Language; 


     })
    }
  

  gotologin() {
    setTimeout(() => {
      this.nav.setRoot(LoginPage);
    }, 1000);
  }

  signup() {
 
  var myData = {
    Email: this.authForm.value.Email, 
    Password:this.authForm.value.Password,
    Mobile: this.authForm.value.Mobile,
    Name: this.authForm.value.Name,
    Religion: this.authForm.value.Religion,
    Profile_Created_For: this.authForm.value.Profile_Created_For,
    Eating_Habits: this.authForm.value.Eating_Habits,
    Drinking_Habits: this.authForm.value.Drinking_Habits,
    Smoking_Habits:this.authForm.value.Smoking_Habits,
    City: this.authForm.value.City,
    State: this.authForm.value.State,
    PIN: this.authForm.value.PIN,
    Language: this.authForm.value.Language,
    Gender:this.authForm.value.Gender,
  
  }
  console.log(myData)
  this.http.post('http://68.66.207.110:8020/createNewUser', myData)
    .subscribe(data => {
    let resp = JSON.parse(data["_body"]);
    console.log(resp)
        if (resp.status == "Success") {
          this.nav.setRoot(LoginPage);
        }
      });
  }
}
