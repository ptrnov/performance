// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestProvider {
  // private url: string ="http://apiperformance.syaira.net";
  private url: string ="http://localhost";
  constructor(
    private http: Http
  ){
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // headers.append('api-token', 'zSWHVwcT45LeBAvONIdx1pjNDHyDlK7i' );
    // const requestOptions = new RequestOptions({ headers: headers });

    // let postData = {
    //         "name": "Customer004",
    //         "email": "customer004@email.com",
    //         "tel": "0000252525"
    // }
  }

  /**
   * https://www.techiediaries.com/ionic-http-post/
  */
  postData(aktivituCtr,postData:any) {
    return new Promise((resolve, reject) => {
      let rslt=this.http.post(this.url + "/"+ aktivituCtr,postData).map(res => res.json());
      rslt.timeout(1000);
      rslt.subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }

  postOption(aktivituCtr,postData:any) {
    // postData(credentials,paramBody) {
      return new Promise((resolve, reject) => {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/json; charset=UTF-8');
        
        // headers.append('Accept', 'application/json');
        // headers.append('Content-Type', 'application/json' );
        // headers.append("Accept", 'application/json');
        // headers.append('api-token', 'zSWHVwcT45LeBAvONIdx1pjNDHyDlK7i' );
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // const requestOptions = new RequestOptions({ headers: headers });
        // var aktivituCtr="kendaraan";
        // let postData = {
        //         "no_polisi": "B",
        //         // "email": "customer004@email.com",
        //         // "tel": "0000252525"
        // }
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        let rslt1=this.http.post(this.url + "/"+ aktivituCtr,postData).map(res1 => res1.json());
        // console.log("log=",this.url + "/"+ aktivituCtr, postData, requestOptions);
        // this.http.post(this.url + "/"+ aktivituCtr, JSON.stringify(postData), requestOptions)
        rslt1.timeout(1000);
        rslt1.subscribe(res1 => {
            resolve(res1);
          }, (err) => {
            reject(err);
          });
        });
  }

  getDatax(activity,credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // this.http.get("http://192.168.100.3/" + "Mobile_Dashboard/login/"+ credentials)
      this.http.get(this.url + activity + credentials)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postApiMap(activity,credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      // this.http.get("http://192.168.100.3/" + "Mobile_Dashboard/login/"+ credentials)
      let rslt=this.http.get(this.url + activity + credentials).map(res => res.json());
      rslt.subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
}
