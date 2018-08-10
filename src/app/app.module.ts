import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TablePage } from '../pages/table/table';
import { Ch1Page } from '../pages/ch1/ch1';
import { Ch2Page } from '../pages/ch2/ch2';
import { Ch3Page } from '../pages/ch3/ch3';
import { Ch4Page } from '../pages/ch4/ch4';
import { Ch5Page } from '../pages/ch5/ch5';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TablePage,
    Ch1Page,
    Ch2Page,
    Ch3Page,
    Ch4Page,
    Ch5Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TablePage,
    Ch1Page,
    Ch2Page,
    Ch3Page,
    Ch4Page,
    Ch5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
