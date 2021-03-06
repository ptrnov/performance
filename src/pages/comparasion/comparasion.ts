import { EventEmitter,Input,Output,Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-comparasion',
  templateUrl: 'comparasion.html',
})
export class ComparasionPage {

  /**
   * Nilai Detail Comparation
  */
  nilaiStation1={
    "station":"SCTV Surabaya","performance":2,"tt_Score":1,"pm_Score":2,"rankday":1,"rank_highest":2,
    "tt_close":1222,"tt_fastest":132,"tt_submit":1233,
    "pm_close":111,"pm_fastest":132,"pm_sumbit":1232,
    "kadep":"Jono","korwil":"puguh","kst":"sorodi","teknisi":"Doni"
  };
  nilaiStation2={
    "station":"SCTv Pacitan","performance":3,"tt_Score":2,"pm_Score":3,"rankday":1,"rank_highest":2,
    "tt_close":1111,"tt_fastest":222,"tt_submit":3333,
    "pm_close":444,"pm_fastest":555,"pm_sumbit":666,
    "kadep":"Sudarmaji","korwil":"Endang","kst":"Mujiono","teknisi":"Randi"
  };
  
  @Input() rating: number ; 

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

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

    rate(index: number) {
      console.log("num=",index);
      // return 2;
      // function used to change the value of our rating 
      // triggered when user, clicks a star to change the rating
    }

    getColor(index: number,max_val:number=0) {
        /* function to return the color of a star based on what
        index it is. All stars greater than the index are assigned
        a grey color , while those equal or less than the rating are
        assigned a color depending on the rating. Using the following criteria:
      
              1-2 stars: red
              3 stars  : yellow
              4-5 stars: green 
        */
      //  for (var i=1;i=max_val;i++){
          if (index<=max_val){
            return '#ffbd14';
          }
      //  } 
      }

    isAboveRating(index: number) {
      // returns whether or not the selected index is above ,the current rating
      // function is called from the getColor function.
    }
}
