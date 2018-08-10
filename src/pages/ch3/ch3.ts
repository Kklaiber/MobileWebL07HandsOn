import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ch2Page } from '../ch2/ch2';
import { Ch4Page } from '../ch4/ch4';
import { TablePage } from '../table/table';

/**
 * Generated class for the Ch3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ch3',
  templateUrl: 'ch3.html',
})
export class Ch3Page {
  ch2Page = Ch2Page;
  ch4Page = Ch4Page;
  table = TablePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ch3Page');
  }

}
