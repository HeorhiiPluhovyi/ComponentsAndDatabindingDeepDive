import { Component } from '@angular/core';
import { ServerElement } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  addServer(serverData: ServerElement) {
    this.serverElements.push(serverData);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'chenged'
  }

  onDestroyFirstEl() {
    this.serverElements.splice(0, 1)
  }
}
