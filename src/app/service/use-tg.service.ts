import { Injectable } from '@angular/core';

declare global {
  interface Window {
    Telegram: any;
  }
}
@Injectable({
  providedIn: 'root'
})
export class UseTgService {
  tg = window.Telegram.WebApp;

  user = this.tg.initDataUnsafe?.user;
  close() {
    this.tg.close();
  }

  onToggleBtn() {
    if (this.tg.MainButton.isVisible) {
      this.tg.MainButton.hide();
    } else {
      this.tg.MainButton.show();
    }
  }
}
