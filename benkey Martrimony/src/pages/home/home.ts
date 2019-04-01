import { Component ,ViewChild} from '@angular/core';
import { NavController ,Nav ,Slides , Content} from 'ionic-angular';
import { Http } from '@angular/http';

import { InboxPage } from '../../pages/inbox/inbox';
import { NotificationPage } from '../../pages/notification/notification';
import { ProfiledetailsPage } from '../../pages/profiledetails/profiledetails';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
    @ViewChild('scroll') scroll: Content;
  
    SwipedTabsIndicator :any= null;
    tabElementWidth_px :number= 50;
    tabs:any=[];
    public news: any;
    public detail:any;
    constructor(public navCtrl: NavController,public nav:Nav,public http: Http) {
      this.tabs=["MATCHES","PREMIUM MEMBERS","VIEWED MY PROFILE","RECENTLY VIEWED","NEAR YOU"];
      
    }

    
    ionViewDidEnter() {
      this.SwipedTabsIndicator = document.getElementById("indicator");
      let imgUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20009695fbbb42ac8bdcf0fdfbf8036d';
    console.log(imgUrl);
    this.http.get(imgUrl)
    .subscribe(data=>{
     let result = JSON.parse(data["_body"]);
    // console.log(result);
     this.news = result.articles; 
    console.log(this.news);
     })

     let api = 'http://www.json-generator.com/api/json/get/bQjntkPDci?indent=2';
     console.log(api);
     this.http.get(api)
     .subscribe(data=>{
      let result = JSON.parse(data["_body"]);
     // console.log(result);
      this.detail = result; 
     console.log(this.detail);
      })
    }


    
    
  
    selectTab(index) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
       this.scroll.scrollTo(index*this.tabElementWidth_px,0,500);
      this.SwipedTabsSlider.slideTo(index, 500);
    }
  
    updateIndicatorPosition() {
      this.scroll.scrollTo(this.SwipedTabsSlider.getActiveIndex()*this.tabElementWidth_px,0,200);
  
        // this condition is to avoid passing to incorrect index
      if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
      {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
      }
  
      }
  
  
    animateIndicator($event) {
      if(this.SwipedTabsIndicator)
           this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  
    }
  
    gotoinbox(){
      setTimeout(()=>{
          this.nav.push(InboxPage) ;
     });
    
    }

    gotonotification(){
      setTimeout(()=>{
          this.nav.setRoot(NotificationPage) ;
     }),1000;
    }

    // gotoprofiledetails(){
    //   setTimeout(()=>{
    //       this.nav.push(ProfiledetailsPage) ;
    //  }),1000;
    
    // }

    gotoprofiledetails(){
      setTimeout(()=>{
          this.nav.push(ProfiledetailsPage) ;
     }),1000;
    }

    gotosearch(){
      setTimeout(()=>{
          this.nav.setRoot(SearchPage) ;
     }),1000;
    }

    gotofirst(){
      setTimeout(()=>{
          this.nav.setRoot(HomePage) ;
     }),1000;
    }

  }
