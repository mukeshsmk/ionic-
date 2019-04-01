import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the FiltersearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtersearch',
  templateUrl: 'filtersearch.html',
})
export class FiltersearchPage {

  public country = [];
    public searchText: any;
    public country1 = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {

    }
    ionViewDidEnter() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        console.log()
        var link = "https://restcountries.eu/rest/v2/all";
        console.log(link)
        this.http.get(link)
            .subscribe(data => {
                let resp = JSON.parse(data["_body"]);  //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
                console.log(resp);
                this.country1 = resp;
                this.country = this.country1;
                console.log(this.country);
                loading.dismiss();
            })
    }

    closesearch(text) {
        console.log(text.flag)
    }

    getItems(ev) {
        let val = ev.target.value;
        this.country = this.country1;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.country = this.country.filter((item) => {
                //console.log( item.name.common)
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

}
