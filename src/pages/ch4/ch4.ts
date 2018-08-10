import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ch3Page } from '../ch3/ch3';
import { Ch5Page } from '../ch5/ch5';
import { TablePage } from '../table/table';

/**
 * Generated class for the Ch4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ch4',
  templateUrl: 'ch4.html',
})
export class Ch4Page {
    ch3Page = Ch3Page;
    ch5Page = Ch5Page;
    table = TablePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ch4Page');
  }

}
