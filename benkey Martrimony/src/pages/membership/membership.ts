import { Component ,ViewChild} from '@angular/core';
import { NavController ,Nav ,Slides , Content} from 'ionic-angular';

@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html'
})
export class MembershipPage {

    @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
    @ViewChild('scroll') scroll: Content;
  
    SwipedTabsIndicator :any= null;
    tabElementWidth_px :number= 50;
    tabs:any=[];
    buttonActive :{};
    
   public hide1=false;
   public hide2=false;
   public hide3=false;

  constructor(public navCtrl: NavController,public nav: Nav) {
    this.tabs=["3MONTHS","6 MONTHS","TILL U MARRY","PERSONALIZED"];
    this.buttonActive=1;
}
ionViewDidEnter() {
  this.SwipedTabsIndicator = document.getElementById("indicator");
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



toggleButton = function(id) {
       
    if(id==1)
   { 
        this.hide1=false;
        this.hide2=false;
        this.hide3=false;
        this.buttonActive=1;
   } 
   if(id==2)
  {  
      this.hide1=true;
      this.hide2=true;
      this.hide3=false;
      this.buttonActive=2;
  }
  if(id==3)
  {  
      this.hide1=true;
      this.hide2=false;
      this.hide3=true;
      this.buttonActive=3;
    
  }
}
}