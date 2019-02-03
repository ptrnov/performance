import { Component } from '@angular/core';
import { Events, Config,IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-home-menu-all',
  templateUrl: 'home-menu-all.html',
})
export class HomeMenuAllPage {

  dataFilter={"tahun":"","bulan":""};
  dataBoxTT={"tot_tt":0,"tot_open":0,"closed_tt":0,"tot_aging":0};
  dataBoxPM={"tot_pm":0,"open_pm":0,"expired_pm":0,"aging_pm":0};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider,
    public config:Config,
    public events:Events
  ) {
    // this.rest.postOption('dashboard/semuas',this.dataFilter).then((rslt:any)=>{
    //   console.log("box_tt=",rslt);
    // }, (err) => {
    //     console.log("jaringanalah=",err); bermas
    // });

    this.events.subscribe('tglPeriode', (data) =>{
    
      setTimeout(() => {
        console.log("tab subscrip tgl=",data);
        // console.log("tab config=",this.config.get('tahun')+"/" +this.config.get("bulan"));
        this.dataFilter.tahun=data.year;
        this.dataFilter.bulan=("0" + data.month).slice(-2);
        console.log("tab all2=",this.dataFilter.tahun);
        this.getBoxAll(this.dataFilter);
      }, 1);

      /**
       * SET CONFIG
       * Create By ptr.nov
       * Data From Subscribe Login ar Setting page.
       */
      this.config.set('tahun',data.year);
      this.config.set('bulan',("0" + data.month).slice(-2));
    });
  }

  ngOnInit() {
    console.log(this.config.get("tahun")+"/" +this.config.get("bulan"));
  }

  ionViewCanEnter(){
    
  }

  ionViewDidLoad() {
    console.log('Tab0');
    
    setTimeout(() => {
      this.getBoxAll(this.dataFilter);
    }, 1000);
  }

  public getBoxAll(tglFilter:any){
    this.rest.postOption('dashboard/semuas/box-all',tglFilter).then((rslt:any)=>{
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
