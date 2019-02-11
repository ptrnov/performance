import { EventEmitter,Input,Output,Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import * as HighCharts from "highcharts";

var dsh1_charting;
var ranking_chart;
const dsh1_monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    
@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  public columns_table1 : any;
  public rows_table1 : any;

  stationCombobox=[{"grade":"","name_station":"","kd_station":""}];
  nilaiStation1={
    "station":"SCTV Surabaya","performance":2,"tt_Score":1,"pm_Score":2,"rankday":1,"rank_highest":2,
    "tt_close":1222,"tt_fastest":132,"tt_submit":1233,
    "pm_close":111,"pm_fastest":132,"pm_sumbit":1232,
    "kadep":"Jono","korwil":"puguh","kst":"sorodi","teknisi":"Doni"
  };
  @Input() rating: number ; 
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest: RestProvider
  ){

    this.columns_table1=[
      { name: 'Position  Name',prop: 'position_name', width: 30},
      { name: 'Name',prop: 'Name', width: 20 },
    ];

    this.rows_table1 = [
      {'position_name':'1','Name':'JkT SCTV'},
      {'position_name':'1','Name':'JkT SCTV'},
      {'position_name':'1','Name':'JkT SCTV'},
      {'position_name':'1','Name':'JkT SCTV'} 
    ];


  }

  ngOnInit() {
    /** Init  */
    setTimeout(() => {
        this.tt_pm_chart_init();
        this.rankingChartInit();
    }, 100);

     /** Update */
    setTimeout(() => {
      this.tt_pm_chart_update();
      this.rankingChartUpdate();
    }, 200);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationPage');
    this.apiCombobox();
  }

  public apiCombobox(){
    this.rest.getDatax('dashboard/comparisons/kombobox1').then((rslt:any)=>{
      console.log("kombobox1=",rslt.result);
      this.stationCombobox=rslt.result;
    }, (err) => {
        console.log("jaringan bermasalah=",err);
    });
  }

  comboBoxSubmit(event:Event){
    console.log("test combobox1=",event);
    // var postParam={"kdStation":event};
    // this.rest.postData('dashboard/comparisons/kombobox2',postParam).then((rslt:any)=>{
    //   console.log("kombobox2=",rslt.result);
    //   this.stationCombobox2=rslt.result;
    // }, (err) => {
    //     console.log("jaringan bermasalah=",err);
    // });
  }

  rateStar(index: number) {
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

  
  

  private tt_pm_chart_init(){
    const tgl = new Date();
    dsh1_charting=HighCharts.chart({
        chart: {
          renderTo:'tt-pm-chart',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'spline'
          //type:'areaspline'
        },
        title: {
            // text: "Comparison Total TT & PM ",
            style: {
              fontSize: '15px'
            }
        },
        subtitle: {
          text: tgl.getDate() +" " + dsh1_monthNames[tgl.getMonth()] + ' ' + tgl.getFullYear()
        },
        credits: {
          enabled: false
        },
        xAxis: {
            //categories: dsh1_monthNames,
            categories: [null,null,null,null,null,null,null,null,null,null,null],
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
              text: 'Total Ticket'
            }
        },
        tooltip: {
            valueSuffix: ' '
        },
        plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                  hover: {
                      lineWidth: 5
                  }
              },
              marker: {
                  enabled: true
              }
            }
        },
        series: [
          {
            type: 'spline',
            name: 'TT',
            data: [1,10,2,2,4,null,null,null,null,null,null],
            // data: aryTarget_RFI,
            color:'#2c303e',
            //fillOpacity: 0.5
        },
        {
          type: 'spline',
          name: 'PM',
          data: [11,10,12,12,14,null,null,null,null,null,null],
          // data: aryTarget_RFI,
          color:'#2c303e',
          //fillOpacity: 0.5
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
  }

  private tt_pm_chart_update(){
    var tt_data=[1,3,1];
    var pm_data=[11,13,2];
    dsh1_charting.update({
      xAxis: [{
        categories:dsh1_monthNames,
        labels: {
             overflow: 'justify'
        }
      }],
      series: [
        {
          name: 'TT',
          data: tt_data,
          color:'#2c303e',
        },{
          name: 'PM',
          data: pm_data,
          color:'#a50500',
        }
      ]
    });
  }


  
  private rankingChartInit(){
    // Init ranking-chart
    const tgl = new Date();
    ranking_chart=HighCharts.chart({
        chart: {
          renderTo:'ranking-chart',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'spline'
          //type:'areaspline'
        },
        title: {
            text: "Rank Statistic",
            style: {
              fontSize: '15px'
            }
        },
        subtitle: {
          text: tgl.getDate() +" " + dsh1_monthNames[tgl.getMonth()] + ' ' + tgl.getFullYear()
        },
        credits: {
          enabled: false
        },
        xAxis: {
            //categories: dsh1_monthNames,
            categories: [null,null,null,null,null,null,null,null,null,null,null],
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
              text: 'Total Ticket'
            }
        },
        tooltip: {
            valueSuffix: ' '
        },
        plotOptions: {
            spline: {
              lineWidth: 2,
              states: {
                  hover: {
                      lineWidth: 5
                  }
              },
              marker: {
                  enabled: true
              }
            }
        },
        series: [
          {
            type: 'spline',
            name: 'TT',
            data: [1,10,2,2,4,null,null,null,null,null,null],
            // data: aryTarget_RFI,
            color:'#2c303e',
            //fillOpacity: 0.5
        },
        {
          type: 'spline',
          name: 'PM',
          data: [11,10,12,12,14,null,null,null,null,null,null],
          // data: aryTarget_RFI,
          color:'#2c303e',
          //fillOpacity: 0.5
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
  }
  private rankingChartUpdate(){
    // Update ranking-chart
    var tt_data=[1,3,1];
    var pm_data=[11,13,2];
    ranking_chart.update({
      xAxis: [{
        categories:dsh1_monthNames,
        labels: {
             overflow: 'justify'
        }
      }],
      series: [
        {
          name: 'TT',
          data: tt_data,
          color:'#2c303e',
        },{
          name: 'PM',
          data: pm_data,
          color:'#a50500',
        }
      ]
    });
  }
  
}
