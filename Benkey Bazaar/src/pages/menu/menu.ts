import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

 

  buttonActive :{};

  constructor(public navCtrl: NavController) {
  
    this.buttonActive=1;

  }
toggleButton = function(id) {
        
        if(id==1)
       { 
           this.buttonActive=1;
       } 
       if(id==2)
      {  
          this.buttonActive=2;
      }
      if(id==3)
      {  
          this.buttonActive=3;
      }
      if(id==4)
      {  
          this.buttonActive=4;
      }
      
  console.log(this.buttonActive)
      };
  }
