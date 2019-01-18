import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import {Keyboard} from '@ionic-native/keyboard';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoanPage } from '../pages/loan/loan';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SelectSearchableModule  } from 'ionic-select-searchable';
import { DatabaseProvider } from '../providers/database/database';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Base64 } from '@ionic-native/base64';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RestProvider } from '../providers/rest/rest';
import { LoanPengajuanPage} from '../pages/loan-pengajuan/loan-pengajuan';
import { LoanDatadiriPage} from '../pages/loan-datadiri/loan-datadiri';
import { LoanEmergencycontactPage} from '../pages/loan-emergencycontact/loan-emergencycontact';
import { LoanPekerjaanPenghasilanPage} from '../pages/loan-pekerjaan-penghasilan/loan-pekerjaan-penghasilan';
import { LoanDatatambahanPage} from '../pages/loan-datatambahan/loan-datatambahan';
import { AppformPage} from '../pages/appform/appform';
import { AppReportPage} from '../pages/app-report/app-report';
import { AppProductPage} from '../pages/app-product/app-product';
import { ReportStatusPage} from '../pages/report-status/report-status';
import { ReportStatusDetailPage} from '../pages/report-status-detail/report-status-detail';
import { ReportSalesSummaryPage} from '../pages/report-sales-summary/report-sales-summary';
import { ReportSalesSummaryprogramPage} from '../pages/report-sales-summaryprogram/report-sales-summaryprogram';
import { ReportTopagentPage} from '../pages/report-topagent/report-topagent';
import { PrdinfoPayrollPage} from '../pages/prdinfo-payroll/prdinfo-payroll';
import { PrdinfoPayrollTopupPage} from '../pages/prdinfo-payroll-topup/prdinfo-payroll-topup';
import { PrdinfoCrossellccPage} from '../pages/prdinfo-crossellcc/prdinfo-crossellcc';
import { PrdinfoCrosselllabilitiPage} from '../pages/prdinfo-crosselllabiliti/prdinfo-crosselllabiliti';
import { PrdinfoCrossellscrloanPage} from '../pages/prdinfo-crossellscrloan/prdinfo-crossellscrloan';
import { PrdinfoCrossellntpPage} from '../pages/prdinfo-crossellntp/prdinfo-crossellntp';
import { PrdinfoCrossellntbPage} from '../pages/prdinfo-crossellntb/prdinfo-crossellntb';
import { LoanDatatambahanEvidancePage } from '../pages/loan-datatambahan-evidance/loan-datatambahan-evidance';
import { LoanDatatambahanAsuransiPage } from '../pages/loan-datatambahan-asuransi/loan-datatambahan-asuransi'
import { LoanDatatambahanPernyataanPage } from '../pages/loan-datatambahan-pernyataan/loan-datatambahan-pernyataan';
import { AppformAuthenticationPage } from '../pages/appform-authentication/appform-authentication';
import { SignupAuthenticationPage } from '../pages/signup-authentication/signup-authentication';
import { SignupMessagePage } from '../pages/signup-message/signup-message';
import { LoanDatatambahanMessagePage } from '../pages/loan-datatambahan-message/loan-datatambahan-message';
import { Etraining1Page } from '../pages/etraining1/etraining1';
import { Etraining2Page } from '../pages/etraining2/etraining2';
import { Etraining3Page } from '../pages/etraining3/etraining3';
import { Etraining4Page } from '../pages/etraining4/etraining4';
import { Etraining4MessagePage } from '../pages/etraining4-message/etraining4-message';
import { AppTaskPage } from '../pages/app-task/app-task';
import { TaskListPage } from '../pages/task-list/task-list';
import { TaskHistoryPage } from '../pages/task-history/task-history';
import { TaskDraftPage } from '../pages/task-draft/task-draft';
import { LoanCalcPage } from '../pages/loan-calc/loan-calc';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    AppformPage,
    AppReportPage,
    AppProductPage,
    LoanPage,
    LoanPengajuanPage,
    LoanDatadiriPage,
    LoanEmergencycontactPage,
    LoanPekerjaanPenghasilanPage,
    LoanDatatambahanPage,
    ReportStatusPage,
    ReportStatusDetailPage,
    ReportSalesSummaryPage,
    ReportSalesSummaryprogramPage,
    ReportTopagentPage,
    PrdinfoPayrollPage,
    PrdinfoPayrollTopupPage,
    PrdinfoCrossellccPage,
    PrdinfoCrosselllabilitiPage,
    PrdinfoCrossellscrloanPage,
    PrdinfoCrossellntpPage,
    PrdinfoCrossellntbPage,
    LoanDatatambahanEvidancePage,
    LoanDatatambahanAsuransiPage,
    LoanDatatambahanPernyataanPage,
    AppformAuthenticationPage,
    SignupAuthenticationPage,
    SignupMessagePage,
    LoanDatatambahanMessagePage,
    Etraining1Page,
    Etraining2Page,
    Etraining3Page,
    Etraining4Page,
    Etraining4MessagePage,
    AppTaskPage,
    TaskListPage,
    TaskHistoryPage,
    TaskDraftPage,
    LoanCalcPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      // preloadModules: false,
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
      bulan: 10,
      tahun: 2018,
      real_name:'none',
      user_group:'none'
    }),
    // SelectSearchableModule,
    NgxDatatableModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    WelcomePage,
    AppformPage,
    AppReportPage,
    AppProductPage,
    LoanPage,
    LoanPengajuanPage,
    LoanDatadiriPage,
    LoanEmergencycontactPage,
    LoanPekerjaanPenghasilanPage,
    LoanDatatambahanPage,
    ReportStatusPage,
    ReportStatusDetailPage,
    ReportSalesSummaryPage,
    ReportSalesSummaryprogramPage,
    ReportTopagentPage,
    PrdinfoPayrollPage,
    PrdinfoPayrollTopupPage,
    PrdinfoCrossellccPage,
    PrdinfoCrosselllabilitiPage,
    PrdinfoCrossellscrloanPage,
    PrdinfoCrossellntpPage,
    PrdinfoCrossellntbPage,
    LoanDatatambahanEvidancePage,
    LoanDatatambahanAsuransiPage,
    LoanDatatambahanPernyataanPage,
    AppformAuthenticationPage,
    SignupAuthenticationPage,
    SignupMessagePage,
    LoanDatatambahanMessagePage,
    Etraining1Page,
    Etraining2Page,
    Etraining3Page,
    Etraining4Page,
    Etraining4MessagePage,
    AppTaskPage,
    TaskListPage,
    TaskHistoryPage,
    TaskDraftPage,
    LoanCalcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    SQLite,
    DatabaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Camera,
    DatePicker,
    Base64,
    BarcodeScanner,
    RestProvider
  ]
})
export class AppModule {}
