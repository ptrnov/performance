import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-comparasion',
  templateUrl: 'comparasion.html',
})
export class ComparasionPage {

  stationCombobox1=[{"grade":"","name_station":"","kd_station":""}];
  stationCombobox2=[{"grade":"","name_station":"","kd_station":""}];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ComparasionPage');
    this.combobox1();
  }

  public combobox1(){
    this.rest.getDatax('dashboard/comparisons/kombobox1').then((rslt:any)=>{
      console.log("kombobox1=",rslt.result);
      this.stationCombobox1=rslt.result;
    }, (err) => {
        console.log("jaringan bermasalah=",err);
    });
  }

  comboBox1Change(event:Event){
    console.log("test combobox1=",event);
    var postParam={"kdStation":event};
    this.rest.postData('dashboard/comparisons/kombobox2',postParam).then((rslt:any)=>{
      console.log("kombobox2=",rslt.result);
      this.stationCombobox2=rslt.result;
    }, (err) => {
        console.log("jaringan bermasalah=",err);
    });
  }
}
