import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Nav } from 'ionic-angular';
import { Http } from '@angular/http';

import { EditPage } from '../../pages/edit/edit';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-uploadimg',
  templateUrl: 'uploadimg.html'
})
export class UploadimgPage {
  data: any = {};
  myphoto: any;
  Profile_Picture_Location: any;
  public fileName: any;
  constructor(private camera: Camera, public nav: Nav, private transfer: FileTransfer, private http: HTTP, private file: File, public loadingCtrl: LoadingController) {

    this.data.myphoto = '';
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 400,
      targetHeight: 400
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = imageData;
      console.log(this.myphoto)
      let loader = this.loadingCtrl.create({
        content: "uploading..."

      });

    })
  };
  
  upload() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    // console.log(this.file)
    var random = Math.floor(Math.random() * 100);
    let Options: FileUploadOptions = {
      fileKey: "myimage_" + random + ".jpg",
      fileName: "myimage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpg/png/jpeg",
      headers: {}
    }
    console.log('\n\n');
    console.log(typeof this.myphoto)
    console.log(this.myphoto)
    console.log('\n\n');
    console.log( Options)
    fileTransfer.upload(this.myphoto, "http://68.66.207.110:8006/saveFile/", Options)
      .then((data) => {
        console.log(data);
        var myData = JSON.stringify({ Img: this.myphoto });
        var resp = JSON.parse(data.response);
        console.log(resp);
        console.log("Haii", this.myphoto);
        var myimg = { Profile_Picture_Location: Options.fileName }
        console.log();
        console.log(myimg);
        this.test(myimg)
      });
  }

  test(myimg) {

    this.http.post('http://68.66.207.110:8020/updateProfile', myimg, {})
      .then(data => {
        let resp = JSON.parse(data.data);
        // console.log(resp);
       
        this.nav.setRoot(EditPage)
      });
    (err) => {
      console.log(err)
    }

  }

}