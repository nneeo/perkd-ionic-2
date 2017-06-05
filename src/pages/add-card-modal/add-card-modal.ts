import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {CardNoModal} from "../card-no-modal/card-no-modal";

/**
 * Generated class for the AddCartModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-card-modal',
  templateUrl: 'add-card-modal.html',
})
export class AddCardModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCartModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToCardNo() {
    this.navCtrl.push(CardNoModal);
  }

}
