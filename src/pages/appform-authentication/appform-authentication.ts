import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { timeout } from 'rxjs/operator/timeout';
import {LoanDatatambahanMessagePage } from '../../pages/loan-datatambahan-message/loan-datatambahan-message'


let passcode="";
@IonicPage()
@Component({
  selector: 'page-appform-authentication',
  templateUrl: 'appform-authentication.html',
})
export class AppformAuthenticationPage {
  no0;
  no1;
  no2;
  no3;
  no4;
  no5;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    passcode = "";
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
            this.navCtrl.setRoot(LoanDatatambahanMessagePage);
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


  replaceIfSubstring(original, substr) {
    var idx = original.indexOf(substr);
    if (idx != -1) {
        return original.substr(idx);
    } else {
        return original;
    }
  }


}
