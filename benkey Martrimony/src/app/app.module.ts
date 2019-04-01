import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { FirstPage } from '../pages/first/first';

import { BannerPage } from '../pages/banner/banner';
import { NotificationPage } from '../pages/notification/notification';
import { SuccessstoriesPage } from '../pages/successstories/successstories';
import { MembershipPage } from '../pages/membership/membership';
import { SettingsPage } from '../pages/settings/settings';
import { ProfiledetailsPage } from '../pages/profiledetails/profiledetails';
import { SettingsnotificationPage } from '../pages/settingsnotification/settingsnotification';
import { NearyouPage } from '../pages/nearyou/nearyou';
import { AlertPage } from '../pages/alert/alert';
import { SearchPage } from '../pages/search/search';
import { PrivacyPage } from '../pages/privacy/privacy';
import { ContactfilterPage } from '../pages/contactfilter/contactfilter';
import { BlockedprofilesPage } from '../pages/blockedprofiles/blockedprofiles';
import { IgnoredprofilesPage } from '../pages/ignoredprofiles/ignoredprofiles';
import { PhoneprivacyPage } from '../pages/phoneprivacy/phoneprivacy';
import { HelpcenterPage } from '../pages/helpcenter/helpcenter';
import { FeedbackPage } from '../pages/feedback/feedback';
import { BranchlocatorPage } from '../pages/branchlocator/branchlocator';
import { AccountPage } from '../pages/account/account';
import { FaqPage } from '../pages/faq/faq';
import { FaqprofilePage } from '../pages/faqprofile/faqprofile';
import { FaqmembershipPage } from '../pages/faqmembership/faqmembership';
import { FaqcontactPage } from '../pages/faqcontact/faqcontact';
import { FaqsearchPage } from '../pages/faqsearch/faqsearch';
import { FaqprivacyPage } from '../pages/faqprivacy/faqprivacy';
import { ApiPage } from '../pages/api/api';
import { EditPage } from '../pages/edit/edit';
import { InboxPage } from '../pages/inbox/inbox';
// import { SentPage } from '../pages/sent/sent';
import { SwipePage } from '../pages/swipe/swipe';
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
import { ComingsoonPage } from '../pages/comingsoon/comingsoon';

import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { SwingModule } from 'angular2-swing';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { FiltersearchPage } from '../pages/filtersearch/filtersearch';
import { UploadimgPage } from '../pages/uploadimg/uploadimg';
import { UploadPage } from '../pages/upload/upload';

import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    FirstPage,
   
    BannerPage,
    NotificationPage,
    MembershipPage,
    SuccessstoriesPage,
    SettingsPage,
    SettingsnotificationPage,
    AccountPage,
    ProfiledetailsPage,
    NearyouPage,
    AlertPage,
    SearchPage,
    PrivacyPage,
    ContactfilterPage,
    BlockedprofilesPage,
    IgnoredprofilesPage,
    PhoneprivacyPage,
    HelpcenterPage,
    FeedbackPage,
    BranchlocatorPage,
    FaqPage,
    FaqprofilePage,
    FaqmembershipPage,
    FaqcontactPage,
    FaqsearchPage,
    FaqprivacyPage,
    ApiPage,
    EditPage,
    InboxPage,
    ListPage,
    EditprofileownPage,
    BasicdetailsPage,
    ReligiousPage,
    ProfessionalPage,
    LocationPage,
    FamilydetailsPage,
    AboutmyfamilyPage,
    PartnerbasicdetailsPage,
    partnerreligiousPage,
    ProfessionalpreferancePage,
    FiltersearchPage,
    LocationpreferencePage,
    ComingsoonPage,
    UploadimgPage,
    // SentPage,
    UploadPage,
    SwipePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule,
    HttpModule,
    SelectSearchableModule,
    SwingModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    FirstPage,
    BannerPage,
    NotificationPage,
    MembershipPage,
    SuccessstoriesPage,
    SettingsnotificationPage,
    SettingsPage,
    AccountPage,
    ProfiledetailsPage,
    NearyouPage,
    AlertPage,
    SearchPage,
    PrivacyPage,
    ContactfilterPage,
    BlockedprofilesPage,
    IgnoredprofilesPage,
    PhoneprivacyPage,
    HelpcenterPage,
    FeedbackPage,
    BranchlocatorPage,
    FaqPage,
    FaqprofilePage,
    FaqmembershipPage,
    FaqcontactPage,
    FaqsearchPage,
    FaqprivacyPage,
    ApiPage,
    EditPage,
    InboxPage,
    ProfessionalPage,
    LocationPage,
    FamilydetailsPage,
    AboutmyfamilyPage,
    PartnerbasicdetailsPage,
    partnerreligiousPage,
    ComingsoonPage,
    // SentPage,
    SwipePage,
    EditprofileownPage,
    BasicdetailsPage,
    ReligiousPage,
    FiltersearchPage,
    ProfessionalpreferancePage,
    LocationpreferencePage,
    UploadimgPage,
    UploadPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OpenNativeSettings,
    HTTP,
    FileTransfer,
    File,
    ImagePicker,
    Camera,
    Base64,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
