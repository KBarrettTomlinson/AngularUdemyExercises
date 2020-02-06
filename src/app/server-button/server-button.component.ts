

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server-button',
  templateUrl: './server-button.component.html',
  styleUrls: ['./server-button.component.css']
})
export class ServerButtonComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }

  ngOnInit() {
  }

}
