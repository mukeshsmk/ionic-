import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
// import { BannerPage } from '../pages/banner/banner';
import { SuccessstoriesPage } from '../pages/successstories/successstories';
import { MembershipPage } from '../pages/membership/membership';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { FirstPage } from '../pages/first/first';
// 

// import { NotificationPage } from '../pages/notification/notification';



// import { SettingsnotificationPage } from '../pages/settingsnotification/settingsnotification';
// import { ProfiledetailsPage } from '../pages/profiledetails/profiledetails';
// import { NearyouPage } from '../pages/nearyou/nearyou';
// import { AlertPage } from '../pages/alert/alert';
// import { SearchPage } from '../pages/search/search';
// import { AccountPage } from '../pages/account/account';
// import { ContactfilterPage } from '../pages/contactfilter/contactfilter';
// import { BlockedprofilesPage } from '../pages/blockedprofiles/blockedprofiles';
// import { IgnoredprofilesPage } from '../pages/ignoredprofiles/ignoredprofiles';
// import { HelpcenterPage } from '../pages/helpcenter/helpcenter';
// import { FeedbackPage } from '../pages/feedback/feedback';
// import { BranchlocatorPage } from '../pages/branchlocator/branchlocator';
// import { FaqPage } from '../pages/faq/faq';
// import { PhoneprivacyPage } from '../pages/phoneprivacy/phoneprivacy';
// import { FaqprofilePage } from '../pages/faqprofile/faqprofile';
// import { FaqmembershipPage } from '../pages/faqmembership/faqmembership';
// import { FaqcontactPage } from '../pages/faqcontact/faqcontact';
// import { FaqsearchPage } from '../pages/faqsearch/faqsearch';
// import { ApiPage } from '../pages/api/api';
// import { FaqprivacyPage } from '../pages/faqprivacy/faqprivacy';
import { EditPage } from '../pages/edit/edit';
// import { PrivacyPage } from '../pages/privacy/privacy';
// import { InboxPage } from '../pages/inbox/inbox';
// import { SwipePage } from '../pages/swipe/swipe';
// import { SentPage } from '../pages/sent/sent';

import { EditprofileownPage } from '../pages/editprofileown/editprofileown';
import { BasicdetailsPage } from '../pages/basicdetails/basicdetails';
import { ReligiousPage } from '../pages/religious/religious';
import { ProfessionalPage } from '../pages/professional/professional';
import { LocationPage } from '../pages/location/location';
import { FamilydetailsPage } from '../pages/familydetails/familydetails';
import { AboutmyfamilyPage } from '../pages/aboutmyfamily/aboutmyfamily';
import { PartnerbasicdetailsPage } from '../pages/partnerbasicdetails/partnerbasicdetails';
import { partnerreligiousPage } from '../pages/partnerreligious/partnerreligious';
import { ProfessionalpreferancePage } from '../pages/professionalpreferance/professionalpreferance';
import { LocationpreferencePage } from '../pages/locationpreference/locationpreference';

// import { ComingsoonPage } from '../pages/comingsoon/comingsoon';
import { UploadimgPage } from '../pages/uploadimg/uploadimg';
import { UploadPage } from '../pages/upload/upload';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage :any = SignupPage;
  public cookie_var:any;
 
  public alertShown:boolean = false;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar,public  app: App, public splashScreen: SplashScreen,public alertCtrl: AlertController) {
  
    this.cookie_var = "Usercookie";

          
    if(localStorage.getItem("Usercookie")) {
      this.rootPage = EditPage;
       console.log("it is empty");
    } else {
      this.rootPage = LoginPage;
    }
    
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'My Matches', component: HomePage,icon: "ios-people"},
    //   { title: 'Success Stories', component: SuccessstoriesPage,icon: "ios-contacts" },
    //   { title: 'Membership', component: MembershipPage,icon: "person-add" },
    //   { title: 'Settings', component: SettingsPage,icon: "md-settings" },
    //   { title: 'Signup', component: SignupPage,icon: "ios-chatbubbles" },
    //   { title: 'Login', component: LoginPage,icon: "document" },
    //    { title: 'Edit Profile', component: EditPage,icon: "ios-person" },



    //   // { title: 'Inbox', component: InboxPage,icon: "mail-open" },
    //   // { title: 'Sent', component: SentPage ,icon: "md-send"},
    //   // { title: 'Daily Recommendations', component: SwipePage ,icon: "ios-calendar"},
    //   // { title: 'Help Center', component: HelpcenterPage,icon: "ios-help-circle" },
    //   // { title: 'Notification', component: NotificationPage,icon: "ios-notifications" }
     
     
      
      
    //   ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide(); 
      this.statusBar.styleDefault();
     


      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
