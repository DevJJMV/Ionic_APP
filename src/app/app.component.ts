import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; // Asegúrate de importar el MenuController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/principal', icon: 'book' },
    { title: 'Home', url: '/home', icon: 'home-outline' },
  ];

  constructor(private menuCtrl: MenuController) {}

  // Definir las funciones para abrir los menús
  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }

  openSecondMenu() {
    this.menuCtrl.open('second-menu');
  }

  openEndMenu() {
    this.menuCtrl.open('end-menu');
  }
}
