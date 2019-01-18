import { Component } from '@angular/core';
import { IonicPage,Platform,App, NavController, NavParams } from 'ionic-angular';
import { _ParseAST } from '@angular/compiler';
import { AppformPage } from '../../pages/appform/appform';


@IonicPage()
@Component({
  selector: 'page-loan-pengajuan',
  templateUrl: 'loan-pengajuan.html',
})
export class LoanPengajuanPage {
  ya: boolean = false;
  noreg:any;
  serialData = {
    "data_pengajuan":{
      "dokumen_lampiran": "",
      "nasabah_bank": {
        "status":"",
        "nomor_tekening":""
      },
      "jumlah_pinjaman": "",
      "bunga": "",
      "tgl_penggajian": "",
      "peruntukan": "",
      "nama_bank": "",
      "nomor_rekening": "",
      "atas_nama": "",
      "cabang": ""
    }
  };

  serialData1 = {
    "data_diri":{
      "a": "",
      "b":""
    }
  };
  // ,
  //     "status":"0",
  //     "create_by": "1"
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public app:App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanPengajuanPage') {
          if (nav.canGoBack()){}else{
            // this.navCtrl.push(AppformPage);
            // this.navCtrl.setRoot(AppformPage);
            this.app.getRootNav().setRoot(AppformPage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanPengajuanPage');
  }

  radio_select(nilai) {
    console.log("nilai=",nilai);
    if (nilai=="ya") {
      this.ya = false;
      this.noreg="";
    }else{
      this.ya = true;
      this.noreg=0;
      // document.getElementById("noreg").nodeValue="0";
    }
  }

  submitBerita(){
    console.log("submit_data=",this.serialData);
    localStorage.setItem('data_pengajuan', JSON.stringify(this.serialData));
    localStorage.setItem('data_diri', JSON.stringify(this.serialData1));
    localStorage.setItem('obj',JSON.stringify(localStorage.getItem('data_pengajuan') + localStorage.getItem('data_diri')));
    var obj1=JSON.parse(localStorage.getItem('data_pengajuan'));
    var obj2=JSON.parse(localStorage.getItem('data_diri'));
    var obj=Object.assign(obj1,obj2);
    // obj=Object.assign(a,b);
    console.log("result=",obj);
  }

  // public kembali(){
  //   this.navCtrl.setRoot(AppformPage);
  // }

  btnNext() {
    this.navCtrl.parent.select(1);
  }

  public kembali(){
    this.app.getRootNav().setRoot(AppformPage);
  }
}
