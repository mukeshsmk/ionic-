import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { VendorPage } from '../../pages/vendor/vendor';
import { LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
  pictures = ['veg.jpg', 'grocery.jpg'];
  // photos = ['baby1.jpg', 'baby2.jpg'];
  babycare = ['baby-1.jpg', 'baby-2.jpg'];

  public create: any;
  public news: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public nav: Nav,public http: Http) {

  }

  ionViewDidEnter(){
    let imgUrl = 'http://localhost/api/product/read.php';
    console.log(imgUrl);
    this.http.get(imgUrl)
    .subscribe(data=>{
     let result = JSON.parse(data["_body"]);
    console.log(result);
     this.news = result.articles; 
    console.log(this.news);
     })
    }

goto() {
  let loading = this.loadingCtrl.create({
    content: 'Loading...'
  });

  loading.present();
  setTimeout(() => {
    this.nav.push(VendorPage);
  }, 1000);
  setTimeout(() => {
    loading.dismiss();
  }, 1000);
}


}