import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {TerminalService} from "primeng/terminal";
import {Subscription} from "rxjs";
import {UseTgService} from "./service/use-tg.service";

//const tg = window.Telegram.WebApp;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, TerminalService]
})
export class AppComponent {

  constructor(public tg: UseTgService) {
  }
}
