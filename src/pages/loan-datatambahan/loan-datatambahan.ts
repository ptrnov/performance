import { Component } from '@angular/core';
import { IonicPage,App,Platform,NavController,NavParams,ToastController,Events } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Base64 } from '@ionic-native/base64';
import { LoanDatatambahanEvidancePage } from '../../pages/loan-datatambahan-evidance/loan-datatambahan-evidance';

@IonicPage()
@Component({
  selector: 'page-loan-datatambahan',
  templateUrl: 'loan-datatambahan.html',
})
export class LoanDatatambahanPage {
  atr_pic_ktp:boolean=true;
  atr_pic_selfiktp:boolean=true;
  atr_pic_npwp:boolean=true;
  atr_pic_selfinpwp:boolean=true;
  atr_pic_selfiagent:boolean=true;

  serialDataTambahan = {
    "data_tambahan":{
      "nama_pt_sebelumnya": "",
      "usaha_bekerja_sejak": "",
      "cc_bank": "",
      "cc_no": "",
      "cc_limit": "",
      "cc_dimiliki_sejak": "",
      "pic_ktp": "",
      "pic_selfiektp": "",
      "pic_npwp": "",
      "pic_slipgaji": "",
      "pic_selfie_agen": "",
      "stt_persetujuan": ""
    }
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    public events: Events,
    private camera: Camera,
    public toastCtrl: ToastController,
    private datePicker: DatePicker,
    private base64: Base64,
    public app: App
  ) {
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'LoanDatatambahanPage') {
          if (nav.canGoBack()){}else{
            // this.tabRef.select(0);
            this.navCtrl.parent.select(3);
          }
          console.log("back=",activeView.name);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanDatatambahanPage');
  }

  public ambilPhoto(event){
    console.log("src id=",event.srcElement.id);
    this.platform.ready().then(() => {
      if (this.platform._platforms[0] == 'cordova') {
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
          if(event.srcElement.id=="id-ktp"){
            this.atr_pic_ktp=false;
          }else if(event.srcElement.id=="id-selfiktp"){
            this.atr_pic_selfiktp=false;
          }else if(event.srcElement.id=="id-npwp"){
            this.atr_pic_npwp=false;
          }else if(event.srcElement.id=="id-selfinpwp"){
            this.atr_pic_selfinpwp=false;
          }else if(event.srcElement.id=="id-selfiagent"){
            this.atr_pic_selfiagent=false;
          }
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.base64.encodeFile(imageData).then((base64File:string)=>{
            console.log("base64=",base64File);
          });
          console.log("dataImage" + imageData);
          var ImgDes1=<HTMLImageElement>document.getElementById(event.srcElement.id + "-thum");
          ImgDes1.hidden=false;
          ImgDes1.src=imageData;
         }, (err) => {
          console.log("erro image", err);
         });
      }else{
        let toasPic = this.toastCtrl.create({
          message: 'Camera belum ada ...',
          duration: 3000,
          position: 'middle'
        });
        toasPic.present();
      }
    });
  }

  public kirimdata(){
    // this.rest.postData('berita-lantas-insert',this.serialData).then((data:any)=>{
    //   console.log("cari barcode",data);
    // });
  }

  public evidance(){
    // this.navCtrl.push(LoanDatatambahanEvidancePage);
    this.navCtrl.setRoot(LoanDatatambahanEvidancePage);
  }
}
