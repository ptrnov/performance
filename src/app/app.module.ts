import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import {Keyboard} from '@ionic-native/keyboard';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SelectSearchableModule  } from 'ionic-select-searchable';
import { DatabaseProvider } from '../providers/database/database';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Base64 } from '@ionic-native/base64';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RestProvider } from '../providers/rest/rest';
import { SignupAuthenticationPage } from '../pages/signup-authentication/signup-authentication';
import { SignupMessagePage } from '../pages/signup-message/signup-message';
import { HomeMenu1Page } from '../pages/home-menu1/home-menu1';
import { HomeMenu2Page } from '../pages/home-menu2/home-menu2';
import { HomeMenuAllPage } from '../pages/home-menu-all/home-menu-all';
import { ComparasionPage } from '../pages/comparasion/comparasion';
import { MapPage } from '../pages/map/map';
import { StationPage } from '../pages/station/station';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    WelcomePage,
    SignupAuthenticationPage,
    SignupMessagePage,
    HomeMenu1Page,
    HomeMenu2Page,
    HomeMenuAllPage,
    ComparasionPage,
    MapPage,
    StationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // preloadModules: false,
      // scrollPadding: false,
      // scrollAssist: true,
      autoFocusAssist: false,
      bulan: 10,
      tahun: 2018,
      real_name:'none',
      user_group:'none'
    }),
    // SelectSearchableModule,
    NgxDatatableModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    WelcomePage,
    SignupAuthenticationPage,
    SignupMessagePage,
    HomeMenu1Page,
    HomeMenu2Page,
    HomeMenuAllPage,
    ComparasionPage,
    MapPage,
    StationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    SQLite,
    DatabaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Camera,
    DatePicker,
    Base64,
    BarcodeScanner,
    RestProvider
  ]
})
export class AppModule {}
