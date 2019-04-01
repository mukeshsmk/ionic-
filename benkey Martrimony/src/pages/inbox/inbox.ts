import { Component ,ViewChild} from '@angular/core';
import { NavController , Slides , Content} from 'ionic-angular';



@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  @ViewChild('scroll') scroll: Content;

  SwipedTabsIndicator :any= null;
  tabElementWidth_px :number= 50;
  tabs:any=[];


  constructor(public navCtrl: NavController) {
    this.tabs=["PENDING","ACCEPTED","DECLINED"];
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


}