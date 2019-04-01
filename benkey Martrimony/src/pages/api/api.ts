import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})
export class ApiPage {


  public news: any;
 

  constructor(public navCtrl: NavController,public http: Http) {

  }


   
  ionViewDidEnter(){
    let imgUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20009695fbbb42ac8bdcf0fdfbf8036d';
    console.log(imgUrl);
    this.http.get(imgUrl)
    .subscribe(data=>{
     let result = JSON.parse(data["_body"]);
    // console.log(result);
     this.news = result.articles; 
    console.log(this.news);
     })
    }
   
  }