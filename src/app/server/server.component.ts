import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online {color: white;}', 'h3 {border: 1px solid black; text-align: center}']
})

export class ServerComponent {
  serverId = 10;
  serverStatus;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getColor(){
    return this.serverStatus == 'online' ? 'ForestGreen' : 'IndianRed';
  }
}
