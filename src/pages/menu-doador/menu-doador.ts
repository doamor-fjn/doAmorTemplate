import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Nomeia a página para redirecionamento
@IonicPage({
  name: 'menu-doador'
})
@Component({
  selector: 'page-menu-doador',
  templateUrl: 'menu-doador.html',
})
export class MenuDoadorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDoadorPage');
  }

}
