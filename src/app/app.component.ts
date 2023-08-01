import { Component } from '@angular/core';
import {PhotoService} from "./service/photoservice";
import {NodeService} from "./service/nodeservice";
import {MenuItem, MessageService} from "primeng/api";
import {TerminalService} from "primeng/terminal";
import {Subscription} from "rxjs";
import {Telegram} from "@twa-dev/types"
declare global {
  interface Window {
    Telegram: Telegram;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, TerminalService]
})
export class AppComponent {
  text: string = 'Close'
  onClose() {
    this.text = 'Close1';
    window.Telegram.WebApp.close();
  }
}
