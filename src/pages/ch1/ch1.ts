import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TablePage } from '../table/table';
import { Ch2Page } from '../ch2/ch2';

/**
 * Generated class for the Ch1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ch1',
  templateUrl: 'ch1.html',
})
export class Ch1Page {
  tablePage = TablePage;
  ch2Page = Ch2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ch1Page');
  }

}
