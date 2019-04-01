import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import { Nav } from 'ionic-angular';

import { EditPage } from '../../pages/edit/edit';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  imageURI:any;
  imageFileName:any;
  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public nav: Nav,
     private http: HTTP,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {}

    getImage() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      }
    
      this.camera.getPicture(options).then((imageData) => {
        this.imageURI = imageData;
      }, (err) => {
        console.log(err);
        this.presentToast(err);
      });
    }


 uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://68.66.207.110:8006/saveFile/', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    var myimg = { Profile_Picture_Location: options.fileName }
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
    console.log(myimg);
    this.test(myimg)
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}
test(myimg) {

  this.http.post('http://68.66.207.110:8020/updateProfile', myimg, {})
    .then(data => {
      let resp = JSON.parse(data.data);
      console.log(resp);
     
      this.nav.setRoot(EditPage)
    });
  (err) => {
    console.log(err)
  }
 
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}