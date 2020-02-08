import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // serverCreationStatus;
  serverCreated = false;
  serverName = "";
  username = "";
  servers = [];

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  resetUserName(){
    this.username = "";
  }

}
