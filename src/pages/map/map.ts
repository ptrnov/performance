import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { defaultNewStyle } from './mapStyle';

declare var google;
var map1: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
    // const dsh1_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    // document.getElementById("map-periode").innerHTML="[ MAPS PERIODE: " + dsh1_monthNames[el.bulan-1] + " " + el.tahun+" ]";
  }

  ngOnInit() {
    setTimeout(() => {
      this.dsh1_initMap();
    }, 100);
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
}
