import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

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

  // Función para abrir el menú lateral "end"
  openEndMenu() {
    this.menuCtrl.open('end-menu');
  }
}
