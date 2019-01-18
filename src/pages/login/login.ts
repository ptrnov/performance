import {Component} from "@angular/core";
import {NavController,Platform,App, AlertController, ToastController, MenuController,Config,Events} from "ionic-angular";
import { HomePage } from "../home/home";
import { WelcomePage } from "../welcome/welcome";
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public responseData : any;
  userData = {"username": "","password": ""};
  constructor(
      public nav: NavController,
      public forgotCtrl: AlertController,
      public menu: MenuController,
      public toastCtrl: ToastController,
      private database: DatabaseProvider,
      public config:Config,
      public events: Events,
      public platform: Platform,
      public app:App
  ){
    this.menu.swipeEnable(false);
    this.platform.registerBackButtonAction(() => {
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();
        // Checks if can go back before show up the alert
        if(activeView.name === 'LoginPage') {
            if (nav.canGoBack()){}
            else{
              this.nav.setRoot(WelcomePage);
            }
            console.log("back=",activeView.name);
        }
    });
  }

  ngOnInit() {

  }
  // go to register page
  register() {
   // this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    // let toastSukses = this.toastCtrl.create({
    //   message: 'Persiapan login, tunggu beberapa saaat...',
    //   duration: 3000,
    //   position: 'middle'
    // });
    // var querySql ="SELECT id,username,password,nama,jabatan,polda,polwil FROM user where username='"+ this.userData.username +"'";
    // this.database.selectData(querySql).then((data:any)=>{
    //   if (data.length>0){
    //     console.log("data user=",data);
    //     console.log("data user=",data[0]['password']);
    //     if(data[0]['password']==this.userData.password){
    //       console.log("data true");
    //       toastSukses.present();
    //       toastSukses.onDidDismiss(() => {
    //         setTimeout(() => {
    //           this.events.publish('profileLogin',data);
    //           localStorage.setItem('profileLogin', JSON.stringify(data));
    //         }, 500);
            this.nav.setRoot(HomePage);

    //       });
    //     }else{
    //       this.salahUserPasswordToast();
    //     }
    //   }else{
    //     console.log("User tidak ti temukan");
    //     this.toastSalahUsername();
    //   }
    // });

    // this.dashboarAll.postData(this.userData.username +"/"+ this.userData.password).then((result) => {
    //   this.responseData = result;
    //   if(this.responseData.login){
    //     console.log(this.responseData);
    //     if(this.responseData.login[0]['STATUS']!=false){
    //         toastSukses.present();
    //         toastSukses.onDidDismiss(() => {
    //           localStorage.setItem('profile', JSON.stringify(this.responseData));
    //           this.config.set('real_name',this.responseData.login[0]['real_name']);
    //           this.config.set('user_group',this.responseData.login[0]['user_group']);
    //           this.events.publish('profileLogin',this.responseData);
    //           this.nav.setRoot(HomePage);
    //         });
    //     }else{
    //       this.salahUserPasswordToast();
    //     }
    //   }
    // }, (err) => {
    //   this.koneksiMasalahToast();
    //     console.log("jaringan bermasalah");
    // });
    // this.nav.setRoot(HomePage);
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
