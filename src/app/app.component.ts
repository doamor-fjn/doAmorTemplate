import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Imports do IonicStorage
import { Storage } from '@ionic/storage';

// Imports do Pagina Menu do Doador
import { MenuDoadorPage } from '../pages/menu-doador/menu-doador';
import { LoginPage } from '../pages/home/login;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: Storage
    ) {
    platform.ready().then(() => {
      // Caso tenha o usuario logado ir para o Menu
      this.storage.get('user')
      .then((resolve) => {
        if (resolve.length >0) {
          this.rootPage = MenuDoadorPage
        } else {
          // Caso tenha o usuario não ir para o login
          this.rootPage = LoginPage
        }
      })
      // Caso tenha o usuario não ir para o login
      .catch(() => {
        this.rootPage = LoginPage;
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
