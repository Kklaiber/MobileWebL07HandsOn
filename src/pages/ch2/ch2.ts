import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ch1Page } from '../ch1/ch1';
import { Ch3Page } from '../ch3/ch3';
import { TablePage } from '../table/table';

/**
 * Generated class for the Ch2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ch2',
  templateUrl: 'ch2.html',
})
export class Ch2Page {
  ch1Page = Ch1Page;
  ch3Page = Ch3Page;
  table = TablePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ch2Page');
  }

}
