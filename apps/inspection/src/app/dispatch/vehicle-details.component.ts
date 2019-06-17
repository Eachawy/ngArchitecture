import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VehicleDetailsServices } from './service/vehicleDetails.services';
import { LanguageStateService } from '@SVIS/language-services';
import { InspectionServices } from '../commonServices/inspectionService';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LoadingService } from '@SVIS/layouts';

declare var CanvasJS: any;


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html'
})
export class VehicleDetailsComponent implements OnInit, OnDestroy {


  public ResultVehicleSearch: any;
  public VehicleStatus: any[] = [];
  public servicesList: any[] = [];
  public servicesCodeList: any[] = []; // push last status from slotService object
  public slotService: any[] = [];
  public slotData: any = {customerName:'', appointmentId:'', vehicleClass:{nameLang1:'',nameLang2:''}};
  public term: any;
  public total: number;
  public current: number;
  public remainingTimeValue = '00:00';
  private chart: any;
  public slots: any[] = [];
  public addSlot = false;
  public addNewSlot = false;
  public tokenNumber = false;


  public tokenNumberData: any= {};
  public tokenNum: string;
  public mobileNum: string;
  public dispatchMsgError: string;
  public tokenData: any[];






 
  constructor(
    private vehicleDetailsSer: VehicleDetailsServices,
    private inspectionServices: InspectionServices,
    private messageService: MessageService,
    private route: Router,
    private loadingSer: LoadingService,
    public languageStateService: LanguageStateService) { }



  ngOnInit() {

    if(this.vehicleDetailsSer.getResultVehicleSearch === undefined
        || this.vehicleDetailsSer.getResultVehicleSearch.body['data'] === null
        || this.vehicleDetailsSer.getResultVehicleSearch.body['data'].length === 0){
      return;
    }
    this.ResultVehicleSearch = this.vehicleDetailsSer.getResultVehicleSearch.body['data'][0];

    
    this.getVehicleStatus();
    this.getSlotService();
    this.getServicesList();
    this.getSlotAppointmentsList();
    this.initChart();
    
  }


  /**
   * get Services List with new flag for using this element.
   */
  getServicesList() {
    this.inspectionServices.getServicesBoothList.forEach(element => {

      if(!element.attempt) {
        element['attempt'] = null;
      }

      element['added'] = false;
      this.slotService.forEach(service => {
        if(service.serviceCode === element.serviceCode) 
        element['added'] = true;
        return false;
      });
      
      this.servicesList.push(element);
    });
  }
  /**
   * Choose select service item method using two argument " element - object ".
   * @param e 
   * @param obj 
   */
  chooseService(e, obj): void {
      if(e.checked){

        const trnID = this.ResultVehicleSearch.transactionId;
        const ChassisNo = this.ResultVehicleSearch.vehicleElementList.filter(d => d.code === "25")[0].value;

        this.vehicleDetailsSer.calcServiceAttemptNo({"transactionId": trnID,"chassisNo": ChassisNo,"serviceCodes": [obj.serviceCode]}).subscribe( res => {
          this.slotService.forEach(c => {
              if (c.serviceCode === res.body.data[0].code){
                c.attempt = res.body['data'][0].attempt;
              }
          });
        });
        obj['status'] = true;
        this.slotService.push(obj);
      }else {
        if(this.servicesList.filter( s => s.added ).length === 0)
          {
            setTimeout(() => {obj['added'] = true;}, 100);
          }else {
            this.slotService.forEach((element, index) => {
              if(element.serviceCode === obj.serviceCode){
                this.slotService.splice(index, 1);
              }
            });
          }
      }
  }
  /**
   * get list of slot services 
   */
  getSlotService(): void {
    let i;
    this.ResultVehicleSearch.serviceCodes.forEach(element => {
      // this.servicesCodeList.push(element.code);
      i = this.inspectionServices.searchServiceByCode(element.code);
      i['attempt'] = element.attempt;
      i['status'] = true;
      this.slotService.push(i);
    });
  }
  /**
   * select slot service using event and selected object
   * @param e 
   * @param obj 
   */
  selectSlotService(e,obj): void {
    if(!e.checked){
      if(this.slotService.filter( s => s.status ).length === 0)
      {
        setTimeout(() => {obj['status'] = true;}, 100);
      }
    }
  }
  /**
   * get Vehicle Status messages.
   */
  getVehicleStatus(): void{
    this.VehicleStatus = this.ResultVehicleSearch.messageList;
  }
  /**
   * start methods get Slot List with bind data and chart.
   */
  getSlotAppointmentsList(): void {
    this.ResultVehicleSearch.vehicleElementList.forEach(item => {
      if(item.code === "26"){
        this.vehicleDetailsSer.getSlotAppointments(item.vehicleClass.id).subscribe( res => {
          this.slotAppointmentItem(res.body['data'][0]);
          this.listOfSlot(res.body['data']);
        });
      }
    });
  }

  listOfSlot(data): void {
    const obj = [];
    data.forEach(el => {
        obj.push({
          label:el.id,
          totalNumber:el.totalNumber,
          reservedNumber:el.reservedNumber,
          value:el
        })
    });
    this.slots = obj;
  }

  onSelectSlotItem(e): void {
    this.slotAppointmentItem(e.value);
    this.slotData = e.value;
  }

  initChart(): void {
    CanvasJS.addColorSet('greenShades', ['#f0f4f4', '#7b80f4']);
    this.chart = new CanvasJS.Chart('chartContainer', {
      colorSet: 'greenShades',
      backgroundColor: "#0000",
      animationEnabled: true,
      data: [
        {
          type: 'doughnut',
          // startAngle: 100,
          innerRadius: 55,
          indexLabelFontSize: 17,
          //indexLabel: "{label} #percent%",
          toolTipContent: '<b>{label}:</b> {y} (#percent%)',
          dataPoints: [
            { y: 100 },
            { y: 0 }
          ]
        }
      ]
    });
    this.chart.render();
  }

  slotAppointmentItem(obj): void {
    if(obj){
      this.slotData = obj;
      this.total = obj.totalNumber;
      this.current = obj.reservedNumber;
      this.chart.options.data[0].dataPoints = [
        { y: 100 - (100 / this.total) * this.current},
        { y: (100 / this.total) * this.current }
      ];
      this.chart.render();
      
      this.remainingTimeFn(obj.remainingTime);
    }
  }

  remainingTimeFn(count): void {   
    let RT;
    const counter = () => {
      count = count - 1;
      if(count < 0) {
        clearInterval(RT);
        return;
      }
      const seconds = count % 60;
      let minutes = Math.floor(count / 60);
      let hours = Math.floor(minutes / 60);
      minutes %= 60;
      hours %= 60;
  
      this.remainingTimeValue = minutes + ':' + seconds; // watch for spelling
      console.log(this.remainingTimeValue );
    }
    clearInterval(RT);
    RT = setInterval(counter, 1000);
  }
  /**
   * End methods
   */

  /**
   * Show part of Slots
   */
  showAddSlot(): void {
    this.addNewSlot = true;
  }

  /**
   * Confirm Transaction Object if response it will show token number.
   */
  showTokenNumber(event: any): void {
    const SER =[];

    if(this.slotData.id){
        event.appointmentId = this.slotData.appointmentId;
        event.appointmentSlotId = this.slotData.id;
    }

    this.slotService.forEach(el => {
      if(el.status === true ){
       SER.push({"code":el.serviceCode, "attempt": el.attempt});
      }
    });

    event.serviceCodes = SER;

    this.loadingSer.startLoading();
    this.vehicleDetailsSer.confirmTransaction(event).subscribe(res => {
      this.loadingSer.stopLoading();
      if(res.body.data){
          this.tokenNumberData = res.body.data[0];
          this.tokenNum = this.tokenNumberData.tokenNumber;
          this.mobileNum = this.tokenNumberData.mobile;
          this.tokenNumber = true; 
      }else{
        this.onErrorMsg(res);
      }
    });
  }
  /**
   * Print Token Number
   */
  print(): void {
    // tokenPrint
    // validation token Number
    if(this.tokenNum === null){
        this.dispatchMsgError = "please insert token number";
        return;
    } else if(this.tokenNum >= this.tokenNumberData.tokenFrom && this.tokenNum <= this.tokenNumberData.tokenTo){
        this.dispatchMsgError = "please insert token number not between range from "+ this.tokenNumberData.tokenFrom  +" to " + this.tokenNumberData.tokenTo + " ";
        return;
    }
    this.loadingSer.startLoading();
    this.vehicleDetailsSer.dispatch(this.ResultVehicleSearch.transactionId, this.tokenNum).subscribe(res => {
          this.loadingSer.stopLoading();
          if(res.body.data === null || res.body.data === []){
              this.onErrorMsg(res);
              return;
          }
          this.tokenData = res.body['data'];
          setTimeout(() => {
            const contents = $('#dvContents').html();
            const frame1 = $('<iframe />');
            frame1[0].name = 'frame1';
            frame1.css({ position: 'absolute', top: '-1000000px' });
            $('body').append(frame1);
            const frameDoc = frame1[0].contentWindow
              ? frame1[0].contentWindow
              : frame1[0].contentDocument.document
              ? frame1[0].contentDocument.document
              : frame1[0].contentDocument;
            frameDoc.document.open();
            //Create a new HTML document.
            const dir = this.languageStateService.isLang1() ? "ltr" : "rtl";
            frameDoc.document.write('<html dir="'+ dir +'"><head><title>Print Inoice</title>');
            frameDoc.document.write('</head><body>');
            //Append the external CSS file.
            // frameDoc.document.write("<style>@media print{.token-number{display:block;font-family:'RTA-Regular';background-color:#fff;width:8cm;height:17.67cm;padding:.45cm .38cm 0;margin:auto;font-family:RTA-Regular;display:block}.token-number .logo{width:2.46cm;height:.91cm;margin:0 auto .29cm;display:block}.token-number .token-date{text-align:center;font-size:8pt;font-weight:700;margin-bottom:.55cm}.token-number .token-date span{display:inline-block;margin-right:.19cm}.token-number .block-one{display:flex;justify-content:center}.token-number .block-one .lane-num,.token-number .block-one .token-num{font-size:7.65pt;font-weight:600;display:flex;flex-direction:column;align-items:center}.token-number .block-one .lane-num .num,.token-number .block-one .token-num .num{font-size:30pt;font-family:Digital_Dismay;font-weight:400}.token-number .block-one .token-num{margin-right:.71cm;margin-bottom:.6cm;position:relative}.token-number .block-one .token-num::before{content:'';position:absolute;width:.02cm;height:1.28cm;right:-.71cm;background-color:#000;top:.67cm}.token-number .block-one .lane-num{margin-left:.7cm}.token-number .block-two .sub-block{font-weight:600;padding:.15cm 0 .12cm;border-bottom:.02cm solid #000;display:flex;justify-content:space-between}.token-number .block-two .sub-block span:first-child{font-size:9pt}.token-number .block-two .sub-block span:last-child{font-size:8pt}.token-number .block-two .sub-block:first-child{padding-top:0}.token-number .block-two .sub-block:last-child{padding-bottom:0;border-bottom:none}.token-number .block-three{border:.02cm solid #000;margin-top:.67cm;height:3.29cm}.token-number .block-three .sub-block{padding:.18cm .55cm;border-bottom:.02cm solid #000;font-size:8pt;font-weight:600;display:flex;justify-content:space-between}.token-number .block-three .sub-block:first-child{padding:.15cm .18cm;font-size:8pt}.token-number .block-three .sub-block:last-child{padding:.18cm;font-size:11pt;line-height:26px}.token-number .block-four .barcode-img{width:5.3cm;height:.81cm;display:block;margin:.56cm auto auto}.token-number .block-four .register-img{width:3.35cm;height:1.92cm;display:block;margin:auto}.token-number .block-four .proud{font-size:10.2pt;font-weight:700;text-align:center;display:block}}</style>");
        
            frameDoc.document.write( "<link rel=\"stylesheet\" href=\"assets/css/print.css\" type=\"text/css\" media=\"print\"/>");
            //Append the DIV contents.
            frameDoc.document.write(contents);
            frameDoc.document.write('</body></html>');
            frameDoc.document.close();
            setTimeout(function() {
              window.frames['frame1'].focus();
              window.frames['frame1'].print();
              frame1.remove();
            }, 500);
            this.route.navigate(['/inspection/VehicleSearch']);
          }, 100);
    });     
  }

  ngOnDestroy(): void {}

  /**
   * Message structure with one argument 
   * @param res 
   */
  onErrorMsg(res){
    this.messageService.add({
      severity: 'error',
      summary: this.languageStateService.isLang1() ? res.body.exceptionList[0].msgLang1.title : res.body.exceptionList[0].msgLang2.title,
      detail: this.languageStateService.isLang1() ? res.body.exceptionList[0].msgLang1.message : res.body.exceptionList[0].msgLang2.message,
      closable: true,
      life: 5000
    });
  }


}

