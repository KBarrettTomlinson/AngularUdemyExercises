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

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    // this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    this.serverCreated = true;
  }


  resetUserName(){
    this.username = "";
  }

  // onUpdateServerName(event: any){
  //   console.log(event);
  //   this.serverName = event.target.value;
  // }

}
