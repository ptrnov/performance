import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupMessagePage } from '../../pages/signup-message/signup-message';
let passcode="";

@IonicPage()
@Component({
  selector: 'page-signup-authentication',
  templateUrl: 'signup-authentication.html',
})
export class SignupAuthenticationPage {
  no0;
  no1;
  no2;
  no3;
  no4;
  no5;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupAuthenticationPage');
  }

  public add(value){

    if(passcode.length < 6) {
     passcode = passcode.concat(value);
     this.no0=passcode.substring(0,1);
     this.no1=passcode.substring(1,2);
     this.no2=passcode.substring(2,3);
     this.no3=passcode.substring(3,4);
     this.no4=passcode.substring(4,5);
     this.no5=passcode.substring(5,6);
     if(passcode.length == 6) {
         setTimeout(() => {
           console.log("The four digit code was entered");
           this.navCtrl.setRoot(SignupMessagePage);
         }, 500);
     }
    console.log(passcode);
   }
  }

  public delete(value){
    passcode=passcode.slice(0,passcode.length-1);
    this.no0=passcode.substring(0,1);
    this.no1=passcode.substring(1,2);
    this.no2=passcode.substring(2,3);
    this.no3=passcode.substring(3,4);
    this.no4=passcode.substring(4,5);
    this.no5=passcode.substring(5,6);
    console.log(passcode);
  }
}
