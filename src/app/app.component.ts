import { Component } from '@angular/core';
import {PhotoService} from "./service/photoservice";
import {NodeService} from "./service/nodeservice";
import {MenuItem, MessageService} from "primeng/api";
import {TerminalService} from "primeng/terminal";
import {Subscription} from "rxjs";
declare global {
  interface Window {
    Telegram: any;
  }
}
//const tg = window.Telegram.WebApp;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, TerminalService]
})
export class AppComponent {
  tg = window.Telegram.WebApp;

  ngOnInit() {

  }
  onClose() {
    this.tg.close();
  }
}
