import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { TablePage } from '../table/table';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tablePage = TablePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }
  public onButtonClicked(): void{
    let modal = this.modalCtrl.create(TablePage);
    modal.present();
  }

}
