import { Component } from '@angular/core';
import { IonicPage, Platform,App,NavController, NavParams } from 'ionic-angular';
import { AppReportPage} from '../../pages/app-report/app-report';
import * as HighCharts from "highcharts";
var dsh2_charting;

@IonicPage()
@Component({
  selector: 'page-report-topagent',
  templateUrl: 'report-topagent.html',
})
export class ReportTopagentPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public app: App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'ReportTopagentPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(AppReportPage);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportTopagentPage');
  }

  public kembali(){
    this.navCtrl.setRoot(AppReportPage);
  }

  ngOnInit() {
    setTimeout(() => {
      this.dsh2_InitChart();
    }, 100);
  }

  private dsh2_InitChart(){
    const dsh2_tgl = new Date();
    const dsh2_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    dsh2_charting=HighCharts.chart({
        chart: {
          renderTo:'dsh2-b2cChart',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'areaspline'
        },
        title: {
            text: "Agents of " + dsh2_tgl.getDate() +" " + dsh2_monthNames[dsh2_tgl.getMonth()] + ' ' + dsh2_tgl.getFullYear(),
            style: {
              fontSize: '15px'
            }
        },
        credits: {
          enabled: false
        },
        xAxis: {
            categories:['1','10',null,null,null,null,null,null,null,null,null],
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
              text: 'Total'
            }
        },
        tooltip: {
            valueSuffix: ' '
        },
        plotOptions: {
            spline: {
              lineWidth: 3,
              states: {
                  hover: {
                      lineWidth: 5
                  }
              },
              marker: {
                  enabled: false
              }
            }
        },
        series: [{
              type: 'column',
              name: 'Catrine',
              data: [100,100,null,null,null,null,null,null,null,null,null],
              // data: aryTarget_RFI,
              color:'#2c303e',
              //fillOpacity: 0.5
          },{
              type: 'column',
              name: 'Rendi',
              data: [50,50,null,null,null,null,null,null,null,null,null],
              // data: aryActual_RFI,
              color:'#a50500',
              //fillOpacity: 0.5
        }, {
              type: 'column',
              name: 'Dina',
              data: [40,30,null,null,null,null,null,null,null,null,null],
              // data: aryTarget,
              color:'#2F69C5'
        }, {
              type: 'column',
              name: 'Sandi',
              data: [10,200,null,null,null,null,null,null,null,null,null],
              // data: aryActual,
              color:'#FF9735'
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
  }
}
