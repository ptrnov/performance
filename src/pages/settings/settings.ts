import {Component} from "@angular/core";
import {Config, Platform,NavController,AlertController,Events} from "ionic-angular";
import {LoginPage} from "../login/login";
// import { DashboardAllProvider } from "../../providers/dashboard-all/dashboard-all";
// import { DatabaseProvider } from '../../providers/database/database';
// import { timeout } from "rxjs/operator/timeout";
// import { resolveDefinition } from "@angular/core/src/view/util";
// import { SelectSearchableComponent  } from 'ionic-select-searchable';
// export interface aryFilterYearMonth {
//   SORT:string,
//   GRP:string,
//   NAME:string,
//   NILAI:string,
//   STT_ACTIVE:string
// }
// var valAryFilterYearMonth=[];
class Port {
  public id: number;
  public name: string;
};

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  public valAryFilterYearMonth:{};
  ports: Port[];
  port: Port;

  myDate: String;
  // myDate: String = new Date('2019-01-01').toISOString();
  constructor(
    private platform: Platform,
    public nav: NavController,
    // private dashboarAll: DashboardAllProvider,
    // private database: DatabaseProvider,
    public alertCtrl: AlertController,
    public events: Events,
    public config:Config
  ){
    this.myDate =this.config.get('tahun') + "-" + this.config.get('bulan');
    console.log("from config=",this.config.get('tahun'));
    this.events.subscribe('tglPeriode', (data) =>{
        console.log("tab subscrip tgl=",data);
        
        
    });

    // this.valAryFilterYearMonth=this.database.getPageSetting_FilterManthYear;
    // this.ports = [
    //   { id: 1, name: 'Tokai' },
    //   { id: 2, name: 'Vladivostok' },
    //   { id: 3, name: 'Navlakhi' }
    // ];
    // platform.ready().then(() => {
      // var querySql ="SELECT SORT,GRP,NAME,NILAI,STT_ACTIVE FROM APPSETTING"
      // +" ORDER BY GRP,SORT ASC";

      // this.database.selectData(querySql).then(data=>{
      //   setTimeout(()=>{
      //     console.log(data);
      //     this.valAryFilterYearMonth=data;
      //   },500);
      // });
      // console.log(getDataQry);
      // var getDataQry=this.database.selectData1(querySql);
      // getDataQry.then(data=>{
      //   setTimeout(()=>{
      //     var aryRslt=[];
      //     aryRslt.push(data);
      //     this.valAryFilterYearMonth=data;
      //     console.log(this.valAryFilterYearMonth);
      //   },500);
      // });
    // });
  }
  filterTglChange($event){
    console.log("filter Tanggal=",$event);
    this.events.publish('filterTgl',$event);
  }
  // portChange(event: {
  //   component: SelectSearchableComponent,
  //   value: any
  // }) {
  //     console.log('port:', event.value);
  // }

  alertInfo(){
    let alert1= this.alertCtrl.create({
      title: '<p><i class="fa fa-info-circle fa-1x"> Warning</i><p>',
      //subTitle:'subtitle',
      message: "<p>Automatic update every 1 minute</p>",
      cssClass:'alertModal',
    });
    alert1.present();
  }
  // ionViewLoaded() {

  // }

  // ionViewDidLoad(){

  //   //     console.log("Adsadas");
  //   // console.log(valAryFilterYearMonth);
  // }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }

  tanggal($event){
    // const day: number = $event.detail.value.day.value;
    // const month: number = $event.detail.value.month.value;
    // const year: number = $event.detail.value.year.value;
    // console.log("tgl=",$event.year);

    console.log("tgl=",$event);

    this.events.publish('tglPeriode',$event);
    localStorage.setItem('periode', JSON.stringify($event));
    // this.config.set('android','tahun',$event.year);
    // this.config.set('android','bulan',$event.month);
  }
}
