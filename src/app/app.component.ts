import { Component, ViewChild } from '@angular/core';
import { App,Nav, Platform,Events,AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DatabaseProvider } from '../providers/database/database';
import { WelcomePage } from '../pages/welcome/welcome';
import { MapPage } from '../pages/map/map';
import { StationPage } from '../pages/station/station';
import { ComparasionPage } from '../pages/comparasion/comparasion';

export interface MenuItem {
  id:string;
  title: string;
  component: any;
  icon: string;
  color:any
}
@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = false;
  rootPage: any = LoginPage;
  // rootPage: any = WelcomePage;
  activePage: any;

  // pages: Array<{title: string, component: any}>;
  appMenuItems: Array<MenuItem>;
  profileData={"user_email": "", "user_name": "","user_picture":""};
  constructor(
    public platform: Platform,
    public app:App,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public database:DatabaseProvider,
    public events: Events,
    public alertCtrl:AlertController
  ) {

    this.initializeApp();
    this.events.subscribe('profileLogin', (data:any) =>{
      //     // console.log("profile login=",data);
      var dataProfile = JSON.parse(data);
      console.log("subscribe profileData=",dataProfile);
      this.profileData.user_email=dataProfile['user_email'];
      this.profileData.user_name=dataProfile['user_name'];
      if(dataProfile['user_picture']!=''){
        this.profileData.user_picture="http://tt.scm.co.id/assets/images/user_picture/" + dataProfile['user_picture'];
      }else{
        this.profileData.user_picture="assets/imgs/avatar.jpg";
      }
      
  });
    // this.platform.ready().then(() => {
    //   this.database.initProvider();
    // });

    this.appMenuItems=[];
    this.appMenuItems = [
      // {id:'side-button[0]', title: 'Menu', component: HomePage, icon: 'ios-checkmark-circle-outline', color:'light'},
      // {id:'side-button[1]', title: 'Pengecekan SIM', component: SimPage, icon: 'ios-checkmark-circle-outline', color:'light'},
      // {id:'side-button[2]', title: 'Pengecekan Kendaraan', component: NokendaraanPage, icon: 'ios-checkmark-circle-outline', color:'light'},
      // {id:'side-button[3]', title: 'Laporan Kecelakaan', component: FormkecelakaanPage, icon: 'ios-checkmark-circle-outline', color:'light'},
      // {id:'side-button[4]', title: 'Laporan Tilang', component: TilangPage, icon: 'ios-checkmark-circle-outline', color:'light'},
      {id:'side-button[0]', title: 'Dashboard', component: HomePage, icon: 'assets/imgs/dashboard.png', color:'light'},
      {id:'side-button[1]', title: 'Station', component: StationPage, icon: 'assets/imgs/station.png', color:'light'},
      {id:'side-button[2]', title: 'Map', component: MapPage, icon: 'assets/imgs/map.png', color:'light'},
      {id:'side-button[3', title: 'Comparison', component: ComparasionPage, icon: 'assets/imgs/comparison.png', color:'light'},
     ];


    // this.events.subscribe('profileLogin', (data:any) =>{
    //     // console.log("profile login=",data);
    //     this.profileData=data;
    //     if(data[0]['username']=='administrator'){
    //       this.appMenuItems=[];
    //       this.appMenuItems = [
    //         {id:'side-button[0]', title: 'Menu', component: HomePage, icon: 'assets/imgs/home.png', color:'light'},
    //         {id:'side-button[1]', title: 'Pengecekan SIM', component: SimPage, icon: 'assets/imgs/sim.png', color:'light'},
    //         {id:'side-button[2]', title: 'Pengecekan Kendaraan', component: NokendaraanPage, icon: 'assets/imgs/pengecekan_kendaraan1.png', color:'light'},
    //         {id:'side-button[3]', title: 'Laporan Tilang', component: TilangPage, icon: 'assets/imgs/tilang.png', color:'light'},
    //         {id:'side-button[4]', title: 'Berita Lantas', component: BeritalantasPage, icon: 'assets/imgs/newspaper.png', color:'light'},
    //         {id:'side-button[5]', title: 'Berita Polda', component: BeritapoldaPage, icon: 'assets/imgs/berita_polda.png', color:'light'},
    //         {id:'side-button[6]', title: 'Peta Lantas', component: PetalantasPage, icon: 'assets/imgs/map.png', color:'light'},
    //         // {id:'side-button[8]', title: 'Tambah Pengguna', component: SignupPage, icon: 'assets/imgs/sim.png', color:'light'}
    //       ];
    //       // this.appMenuItems.push({id:'side-button[3]', title: 'Tambah Pengguna', component: SimPage, icon: 'assets/imgs/sim.png', color:'light'});
    //     }else{
    //       this.appMenuItems=[];
    //       this.appMenuItems = [
    //         {id:'side-button[0]', title: 'Menu', component: HomePage, icon: 'assets/imgs/home.png', color:'light'},
    //         {id:'side-button[1]', title: 'Pengecekan SIM', component: SimPage, icon: 'assets/imgs/sim.png', color:'light'},
    //         {id:'side-button[2]', title: 'Pengecekan Kendaraan', component: NokendaraanPage, icon: 'assets/imgs/pengecekan_kendaraan1.png', color:'light'},
    //         {id:'side-button[3]', title: 'Laporan Tilang', component: TilangPage, icon: 'assets/imgs/tilang.png', color:'light'},
    //         {id:'side-button[4]', title: 'Berita Lantas', component: BeritalantasPage, icon: 'assets/imgs/newspaper.png', color:'light'},
    //         {id:'side-button[5]', title: 'Berita Polda', component: BeritapoldaPage, icon: 'assets/imgs/berita_polda.png', color:'light'},
    //         {id:'side-button[6]', title: 'Peta Lantas', component: PetalantasPage, icon: 'assets/imgs/map.png', color:'light'},
    //       ];
    //     }

    //     // setTimeout(() => {
    //     //   this.database.setAdministrator();
    //     // },1000);
    // });

    // // used for an example of ngFor and navigation
    // // this.pages = [
    // //   { title: 'Form', component: HomePage },
    // //   { title: 'List', component: ListPage }
    // // ];





  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   setTimeout(() => {
    //     const data = JSON.parse(localStorage.getItem('profileLogin'));
    //     console.log("stored=",data);
    //   }, 7000);
    // });
    // this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
      // this.keyboard.disableScroll(true);
      // this.platform.registerBackButtonAction(() => {
      //   // Catches the active view
      //   let nav = this.app.getActiveNavs()[0];
      //   let activeView = nav.getActive();
        // Checks if can go back before show up the alert
        // if(activeView.name === 'HomePage') {
        //     if (nav.canGoBack()){
        //         // nav.pop();
        //         console.log("nav=ok");
        //     } else {
        //         const alert = this.alertCtrl.create({
        //             title: 'Fechar o App',
        //             message: 'Você tem certeza?',
        //             buttons: [{
        //                 text: 'Cancelar',
        //                 role: 'cancel',
        //                 handler: () => {
        //                   this.nav.setRoot('HomePage');
        //                   console.log('** Saída do App Cancelada! **');
        //                 }
        //             },{
        //                 text: 'Fechar o App',
        //                 handler: () => {
        //                   this.logout();
        //                   this.platform.exitApp();
        //                 }
        //             }]
        //         });
        //         alert.present();
        //     }
        // }
    // });



    // });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // page.color="light";
    // for (let p of this.appMenuItems) {

    //     if(p.title==page.title)
    //     {
    //       p.color='sideButton';
    //     }
    //     else
    //     {
    //       p.color='light';
    //     }

    //     }
  }

  public checkActivePage(page): boolean{
    return page === this.activePage;
  }

  logout() {
    // this.nav.removeView('myTabs');
    // this.local.remove('myTabs');
    // localStorage.removeItem("myTabs");
    // this.nav.setRoot(LoginPage);
    this.app.getRootNav().setRoot(LoginPage);
    // this.nav.parent.parent.setRoot(LoginPage);
    // this.app.getRootNav().setRoot
  }
}
