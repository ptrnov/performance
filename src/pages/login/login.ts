import {Component,} from "@angular/core";
import {NavController,Keyboard,Platform,App, AlertController, ToastController, MenuController,Config,Events} from "ionic-angular";
import { HomePage } from "../home/home";
import { WelcomePage } from "../welcome/welcome";
import { DatabaseProvider } from '../../providers/database/database';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public responseData : any;
  dataFilter={"year":"","month":""};
  userData = {"user_email": "yessi.gultom@indosiar.com","password":"Yessi92"};
  // userData = {user_email: "yessi.gultom@indosiar.com"};
  constructor(
      public nav: NavController,
      public forgotCtrl: AlertController,
      public menu: MenuController,
      public toastCtrl: ToastController,
      private database: DatabaseProvider,
      public config:Config,
      public events: Events,
      public platform: Platform,
      public app:App,
      public keyboard: Keyboard,
      public rest:RestProvider
  ){
    
    // this.menu.swipeEnable(false);
    // this.platform.registerBackButtonAction(() => {
    //     let nav = this.app.getActiveNavs()[0];
    //     let activeView = nav.getActive();
    //     // Checks if can go back before show up the alert
    //     if(activeView.name === 'LoginPage') {
    //         if (nav.canGoBack()){}
    //         else{
    //           this.nav.setRoot(WelcomePage);
    //         }
    //         console.log("back=",activeView.name);
    //     }
    // });
  }

  ionViewDidEnter() {
    // this.platform.ready().then(() => {
    //     this.keyboard.de.disableScroll(true);
    // });
  }

  ngOnInit() {

  }
  // go to register page
  register() {
   // this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
      let toastSukses = this.toastCtrl.create({
        message: 'Persiapan login, tunggu beberapa saaat...',
        duration: 3000,
        position: 'middle'
      });
      
      let data1={"user_email":"administrator@gmail.com1"};
      this.rest.postData('login/users',this.userData).then((rslt:any)=>{
        // console.log("login=",rslt['result']['user_email']);
        //console.log(JSON.stringify(rslt));
        // console.log(rslt][[]]);
        if (rslt['result']!=null){
          // console.log("login=",rslt['result']['user_email']);
          if(rslt['result']['user_password']==this.userData.password){
              console.log("login=",rslt['result']['user_password']);
              toastSukses.present();
              toastSukses.onDidDismiss(() => {
              setTimeout(() => {
                this.events.publish('profileLogin',JSON.stringify(rslt['result']));
                localStorage.setItem('profileLogin', JSON.stringify(rslt['result']));

                /**
                 * SUBSCRIBE TANGGAL
                 * Create By ptr.nov
                 */
                const tgl = new Date();
                this.dataFilter.year= tgl.getFullYear().toString();
                this.dataFilter.month=("0" + tgl.getMonth().toString()).slice(-2);
                this.events.publish('tglPeriode',this.dataFilter);
                console.log("login public tgl=",this.dataFilter);

                
              }, 500);
              
              this.nav.setRoot(HomePage);
            });
          }else{
              console.log("Wrong password");
              this.salahUserPasswordToast();
          }
        }else{
          console.log("Wrong Username");
          this.toastSalahUsername();
        }    
      }, (err) => {
          this.koneksiMasalahToast();
            console.log("jaringan bermasalah");
      });
  }
  
  toastSalahUsername(){
    let toast = this.toastCtrl.create({
      message: 'Username salah, username tidak ditemukan.',
      duration: 3000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  salahUserPasswordToast() {
    let toast = this.toastCtrl.create({
      message: 'Password salah.',
      duration: 3000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  koneksiMasalahToast() {
    let toast = this.toastCtrl.create({
      message: 'Network is not connected. Make sure your network is installed',
      duration: 3000,
      position: 'middle'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
