
import { NavController, Nav } from 'ionic-angular';
import { Component ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'page-aboutmyfamily',
  templateUrl: 'aboutmyfamily.html'
})
export class AboutmyfamilyPage {
    @ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController,public nav: Nav) {
  }
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
}
}
