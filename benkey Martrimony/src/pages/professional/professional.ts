import { Component ,ViewChild,ElementRef} from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { EditPage } from '../../pages/edit/edit';
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
    @ViewChild('myInput') myInput: ElementRef;
    public authForm: any = {};
   
    PI:any = {};
    
  constructor(public navCtrl: NavController,public nav: Nav,private http: HTTP,) {
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
     
    this.PI = result.user.Professional_Information;
    this.authForm.Highest_Educational_Qualification=this.PI.Highest_Educational_Qualification;
    this.authForm.Educational_in_Detail=this.PI.Educational_in_Detail;
    this.authForm.Company_Name=this.PI.Company_Name;
    this.authForm.Designation=this.PI.Designation;
    this.authForm.Salary_Per_Annum=this.PI.Salary_Per_Annum;

  })
    }
  

resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
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





