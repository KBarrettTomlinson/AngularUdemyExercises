import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus;
  serverName = "example server name";
  username = "";

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
  }

  resetUserName(){
    this.username = "";
  }

  // onUpdateServerName(event: any){
  //   console.log(event);
  //   this.serverName = event.target.value;
  // }

}
