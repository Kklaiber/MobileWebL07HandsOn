import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ch4Page } from '../ch4/ch4';
import { TablePage } from '../table/table';

/**
 * Generated class for the Ch5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ch5',
  templateUrl: 'ch5.html',
})
export class Ch5Page {
    ch4Page= Ch4Page;
    tablePage= TablePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ch5Page');
  }

}
