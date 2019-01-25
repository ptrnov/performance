import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-menu2',
  templateUrl: 'home-menu2.html',
})
export class HomeMenu2Page {

  public columns_table : any;
  public rows_table : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.columns_table=[
      { name: 'Rengking',prop: 'Rengking', width: 2},
      { name: 'Station',prop: 'Station', width: 20 },
      { name: 'PM.Score',prop: 'PM.Score', width: 4 },
      { name: 'TT.Score',prop: 'TT.Score', width: 4 },
      { name: 'Achievement',prop: 'Achievement' , width: 5}
    ];

    this.rows_table = [
      {'Rengking':'1','Station':'JkT SCTV','PM.Score':'1000','TT.Score':'100','Achievement':''},
      {'Rengking':'2','Station':'Padang Indosiar','PM.Score':'900','TT.Score':'900','Achievement':''},
      {'Rengking':'3','Station':'Cirebon SCTV','PM.Score':'899','TT.Score':'900','Achievement':''},
      {'Rengking':'4','Station':'Medan Indosiar','PM.Score':'800','TT.Score':'800','Achievement':''},
      {'Rengking':'5','Station':'Makasar SCTV','PM.Score':'767','TT.Score':'800','Achievement':''},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeMenu2Page');
  }

}
