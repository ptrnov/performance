import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { defaultNewStyle } from './mapStyle';
import { RestProvider } from '../../providers/rest/rest';


declare var google;
var map1: any;
var circles=[];

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  dataFilter={"tahun":"2018","bulan":"02","operator":"IVM"};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest:RestProvider
  )
  {
    // const dsh1_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    // document.getElementById("map-periode").innerHTML="[ MAPS PERIODE: " + dsh1_monthNames[el.bulan-1] + " " + el.tahun+" ]";
  }

  ngOnInit() {
    setTimeout(() => {
      this.dsh1_initMap();
    }, 100);

    setTimeout(() => {
      this.updateMaps();
    }, 300);
  }

  /** INIT MAP */
  private dsh1_initMap(){
    var mapOptions={
      zoom: 4,
      center: new google.maps.LatLng(-2.209764,117.114258),
      styles: defaultNewStyle,
      scrollwheel: false,
    };
    map1 = new google.maps.Map(document.getElementById("map1"),mapOptions);
    // map1 = new google.maps.Map(this.mapElement2.nativeElement,mapOptions);
  }

  public updateMaps(){

    var mylatlngStation;
    var circleStrokeColor;
    var circleFillColor;
    var myStationMap;

    this.rest.postOption('dashboard/map-stations',this.dataFilter).then((rslt:any)=>{
      console.log("map=",rslt.result);
      setTimeout(()=>{
        rslt.result.forEach((el,index,array)=>{
          mylatlngStation =  new google.maps.LatLng(el.lang,el.lot);
          // SPLIT COLOR BACKGROUN CIRCLE
          console.log("LAT=", ((el.lot).toString()).replace(".",","));
          if(rslt.result['client_id']==1){
              circleStrokeColor="rgb(19, 148, 40)";
              circleFillColor="#449af0";
          };
          if(rslt.result['client_id']==2){
              circleStrokeColor="rgb(240, 205, 10)";
              circleFillColor="#449af0";
          }

          // SET PEROPERTIES CIRCLE
          myStationMap =  new google.maps.Circle({
            center: mylatlngStation,
            radius: 10000,
            strokeColor: circleStrokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor:circleFillColor,
            fillOpacity: 1,
            // infowindow: myInfoWindow
          });

          myStationMap.setMap(map1);
          circles.push(myStationMap);

          // google.maps.event.addListener(myStationMap, 'click', function(ev) {
          //   this.infowindow.setPosition(ev.latLng);
          //   this.infowindow.open(this.map1, this);
          // });
        });
      },100);




    }, (err) => {
        console.log("jaringan bermasalah=",err);
    });
  }
}
