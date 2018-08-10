import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Ch1Page } from '../ch1/ch1';
import { Ch2Page } from '../ch2/ch2';
import { Ch3Page } from '../ch3/ch3';
import { Ch4Page } from '../ch4/ch4';
import { Ch5Page } from '../ch5/ch5';
import { HomePage } from '../home/home';


/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
  ch1Page = Ch1Page;
  ch2Page = Ch2Page;
  ch3Page = Ch3Page;
  ch4Page = Ch4Page;
  ch5Page = Ch5Page;
  homePage = HomePage;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }
  // public onButtonClicked(): void{
  //   let modal = this.modalCtrl.create(Ch1Page);
    
  //   modal.present();
  // }
}
