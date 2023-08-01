import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TerminalModule} from "primeng/terminal";
import {GalleriaModule} from "primeng/galleria";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {DockModule} from "primeng/dock";
import {TreeModule} from "primeng/tree";
import {MenubarModule} from "primeng/menubar";
import {PhotoService} from "./service/photoservice";
import {NodeService} from "./service/nodeservice";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TerminalModule,
        GalleriaModule,
        DialogModule,
        ToastModule,
        DockModule,
        TreeModule,
        MenubarModule,
        ButtonModule
    ],
  providers: [ PhotoService, NodeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
