import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentFile: string = 'none';

  constructor(public navCtrl: NavController, private fileChooser: FileChooser) {

  }

  openChooser(){
    console.log('Opening chooser')
    this.fileChooser.open()
      .then(uri => {
        console.log('File chosen: ', uri);
        this.currentFile = uri;
      })
      .catch(e => {
        console.log('Error choosing file: ', e);
      });
  }
}
