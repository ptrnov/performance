import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-home-menu-all',
  templateUrl: 'home-menu-all.html',
})
export class HomeMenuAllPage {

  dataFilter={"tahun":"2018","bulan":"02"};
  dataBoxTT={"tot_tt":0,"tot_open":0,"closed_tt":0,"tot_aging":0};
  dataBoxPM={"tot_pm":0,"open_pm":0,"expired_pm":0,"aging_pm":0};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider
  ) {
    // this.rest.postOption('dashboard/semuas',this.dataFilter).then((rslt:any)=>{
    //   console.log("box_tt=",rslt);
    // }, (err) => {
    //     console.log("jaringan bermasalah=",err);
    // });
  }

  ionViewDidLoad() {
    console.log('Tab0');
    setTimeout(() => {
      this.getBoxAll();
    }, 1000);
  }

  public getBoxAll(){
    this.rest.postOption('dashboard/semuas/box-all',this.dataFilter).then((rslt:any)=>{
      console.log("box_tt=",rslt.box_tt);
      this.dataBoxTT.tot_tt=rslt.box_tt['tot_tt'];
      this.dataBoxTT.tot_open=rslt.box_tt['tot_open'];
      this.dataBoxTT.closed_tt=rslt.box_tt['closed_tt'];
      this.dataBoxTT.tot_aging=rslt.box_tt['tot_aging'];
      console.log("box_tt=",rslt.box_pm);
      this.dataBoxPM.tot_pm=rslt.box_pm['tot_pms']; 
      this.dataBoxPM.open_pm=rslt.box_pm['tot_pmo'];
      this.dataBoxPM.expired_pm=rslt.box_pm['tot_pme'];
      this.dataBoxPM.aging_pm=80;//rslt.box_pm['aging_pm'];
    }, (err) => {
        console.log("jaringan bermasalah=",err);
    });
  }

}
