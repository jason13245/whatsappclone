import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { SocketIoModule,SocketIoConfig } from "ng-socket-io";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from "../pages/tabs/tabs";
import { FriendsProvider } from '../providers/friends/friends.service';
import { ModalPage } from "../pages/modal/modal";
import { ChatPage } from "../pages/chat/chat";
import { ChatProvider } from '../providers/chat/chat.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {origins: "http://localhost:8100"} };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FriendsProvider,
    ChatProvider
  ]
})
export class AppModule {}
