import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    // Abrir el primer menú utilizando el ID del menú
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    // Abrir el segundo menú utilizando el ID del menú
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    // Abrir el menú del lado "end" utilizando el ID del menú
    this.menuCtrl.open('end-menu');
  }
}
