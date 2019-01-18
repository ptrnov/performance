import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { IonicPage,Platform,App,NavController,NavParams,ToastController,Events } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Base64 } from '@ionic-native/base64';
import { RestProvider } from '../../providers/rest/rest';
import { WelcomePage } from "../welcome/welcome";
import { SignupAuthenticationPage } from '../../pages/signup-authentication/signup-authentication';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  todo   : FormGroup;
  atr_pic_ktp:boolean=true;
  atr_pic_ktp_selfie:boolean=true;
  atr_pic_npwp:boolean=true;
  atr_pic_selfie:boolean=true;

  pic_ktp;
  pic_ktp_selfie;
  pic_npwp;
  pic_selfie;

  view_ktp;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private formBuilder : FormBuilder,
      private database: DatabaseProvider,
      public events: Events,
      private platform: Platform,
      private camera: Camera,
      public toastCtrl: ToastController,
      private datePicker: DatePicker,
      private base64: Base64,
      public rest:RestProvider,
      public app:App
  ){
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      // Checks if can go back before show up the alert
      if(activeView.name === 'SignupPage') {
          if (nav.canGoBack()){}else{
            this.navCtrl.setRoot(WelcomePage);
          }
          console.log("back=",activeView.name);
      }
    });

    // console.log("polwil=",this.database.aryPolwil(1));
    this.todo  = this.formBuilder.group({
      nama: ['',[Validators.required,]],
      phone: ['',[Validators.required,]],
      email: ['',[Validators.required,]],
      // username: ['',[Validators.required,]],
      // password: ['',[Validators.required,]],
      img_ktp:  [''],
      img_ktp_selfie:  [''],
      img_npwp: [''],
      img_selfie : [''],

      // id: ['',[Validators.required,]],
      // username: ['',[Validators.required,]],
      // password: ['',[Validators.required,]] ,
      // nama: ['',[Validators.required,]],
      // jabatan: ['',[Validators.required,]],
      // polda: ['',[Validators.required,]],
      // polwil: ['',[Validators.required,]]
      // psw: ['',[
      //             Validators.required,
      //             Validators.minLength(10),
      //            // Validators.pattern('^[0-9]+$'), //numerik,
      //            ,this.equalto()
      //           ]
      //       ]
      // psw: [' ',Validators.compose([
      //             Validators.required,Validators.minLength[10]
      //           ])
      //      ]
    });
  }

  public poldaChange(event: Event) {
    console.log("id polda",event);
    // this.selectPolwil=
    this.database.aryPolwil(event);
  }

  tambahUser(data){
    console.log("sigup=",JSON.stringify(data));
    // let qry="INSERT INTO user (id,username,password,nama,jabatan,polda,polwil)  VALUES (?,?,?,?,?,?,?)";
    // this.database.insertData(qry,[data['id'],data['username'],data['password'],data['nama'],data['jabatan'],data['polda'],data['polwil']]);
    // .then((msq)=>{
    //   //alert('message' + msq);
    //   console.log(msq);
    // });

    // this.rest.postData('signup',JSON.stringify(data)).then((rslt:any)=>{
    //   let toasPic = this.toastCtrl.create({
    //     message: 'Berhasil dikirim',
    //     duration: 3000,
    //     position: 'middle'
    //   });
    //   toasPic.present();
    //   console.log("data image=",rslt);
    // });

    this.navCtrl.setRoot(SignupAuthenticationPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
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
          }else if(event.srcElement.id=="id-ktp-selfie"){
            this.atr_pic_ktp_selfie=false;
          }else if(event.srcElement.id=="id-npwp"){
            this.atr_pic_npwp=false;
          }else if(event.srcElement.id=="id-selfie"){
            this.atr_pic_selfie=false;
          }
          var ImgDes1=<HTMLImageElement>document.getElementById(event.srcElement.id + "-thum");
              ImgDes1.hidden=false;
              ImgDes1.src=imageData;
          this.view_ktp=imageData;
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.base64.encodeFile(imageData).then((base64File:string)=>{
              // console.log("base64=",base64File);
              if(event.srcElement.id=="id-ktp"){
                this.pic_ktp=base64File.replace(/(\r\n|\n|\r)/gm,"");
              }else if(event.srcElement.id=="id-ktp-selfie"){
                this.pic_ktp_selfie=base64File.replace(/(\r\n|\n|\r)/gm,"");;
              }else if(event.srcElement.id=="id-npwp"){
                this.pic_npwp=base64File.replace(/(\r\n|\n|\r)/gm,"");;
              }else if(event.srcElement.id=="id-selfie"){
                this.pic_selfie=base64File.replace(/(\r\n|\n|\r)/gm,"");;
              }
            });

          }, (err) => {
            console.log("erro image", err);
          });
      }else{
        if(event.srcElement.id=="id-ktp"){
          this.pic_ktp="test";
        }else if(event.srcElement.id=="id-ktp-selfie"){
          this.pic_ktp_selfie="test";
        }else if(event.srcElement.id=="id-npwp"){
          this.pic_npwp="test";
        }else if(event.srcElement.id=="id-selfie"){
          this.pic_selfie="test";
        }
        //for testing ptr.nov
        // this.pic_ktp="test";
        // this.pic_ktp_selfie="test";
        // this.pic_npwp="test";
        // this.pic_selfie="test";
        // console.log("pic_ktp=",this.pic_ktp);
        // console.log("pic_ktp_selfie=",this.pic_ktp_selfie);
        // console.log("pic_npwp=",this.pic_npwp);
        // console.log("pic_selfie=",this.pic_selfie);

        let toasPic = this.toastCtrl.create({
          message: 'Camera belum ada ...',
          duration: 3000,
          position: 'middle'
        });
        toasPic.present();
      }
    });

  }
}
