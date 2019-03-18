import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CarMake } from '../model/carMake';
import { CarModel } from '../model/carModel';
import { CarBrand } from '../model/carBrand';
import { Country } from '../model/country';
import { FormControl, FormGroup } from '@angular/forms';

declare var CanvasJS: any;


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html'
})
export class VehicleDetailsComponent implements OnInit, OnDestroy {

  VehicleFG: FormGroup;

  addSlot: boolean = false;
  addNewSlot: boolean = false;
  tokenNumber: boolean = false;
  tokenVoucher: boolean = false;
  moreDetails: boolean = false;
  export: boolean = true;

  public cars: CarBrand[];
  public country: Country[];
  public selectedcountry: Country[];
  public carMake: CarMake[];
  public selectedcarMake: CarMake[];
  public carModel: CarModel[];

  total: number;
  current: number;

  counter: any;
  term: any;
  /******** Start Slots Of service ********/
  slots: any[] = [
    { label: '2548', value: 'Remaining 15 / 20' },
    { label: '2188', value: 'Remaining 8 / 10' },
    { label: '4508', value: 'Remaining 12 / 20' },
    { label: '5820', value: 'Completed' },
    { label: '1540', value: 'Remaining 11 / 17' },
    { label: '6328', value: 'Remaining 17 / 20' }
  ];
  /******** End List Of service ********/

  /******** Start List Of Services ********/
  services: any[] = [
    { name: 'Export Test', status: true },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Export Test', status: true },
    { name: 'Renewal Test', status: false },
    { name: '28', status: false },
    { name: '25', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Renewal Test', status: false },
    { name: 'Export Test', status: true }
  ];
  /******** End List Of Services ********/

  constructor() {
    this.carMake = [
      { label: 'Audi', value: 'Audi' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' }
    ];
    this.country = [
      { label: 'Japan', value: 'Japan' },
      { label: 'Germany', value: 'Germany' },
      { label: 'USA', value: 'USA' }
    ];
    this.carModel = [
      { label: 'Audi', value: 'Audi' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' }
    ];
  }
  ngOnInit() {

    this.VehicleFG = new FormGroup({
      carMakelist: new FormControl(),
      selectedcountrylist: new FormControl(),
      carModel: new FormControl()
    });
    this.VehicleFG.patchValue({
      selectedcountrylist: 'USA',
      carMakelist: 'Honda'
    });



    this.counter = setInterval(this.count, 1000); //1000 will  run it every 1 second
    this.total = 20;
    this.current = 5;

    /******** Start CanvasJS Config ********/
    CanvasJS.addColorSet('greenShades', ['#f0f4f4', '#7b80f4']);
    let chart = new CanvasJS.Chart('chartContainer', {
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
            { y: 100 - (100 / this.total) * this.current },
            { y: (100 / this.total) * this.current }
          ]
        }
      ]
    });
    chart.render();
    /******** End CanvasJS Config ********/
  }

  /******** Start Add Slot Popup ********/
  showAddSlot() {
    this.addNewSlot = true;
  }
  /******** End Show Add Slot Popup ********/
  showMoreDetails() {
    this.moreDetails = !this.moreDetails;
    // console.log(this.moreDetails);
  }

  /******** Start Token Number Popup ********/
  showTokenNumber() {
    console.log(`${this.VehicleFG.get('selectedcountrylist').value} -----   ${this.VehicleFG.get('carMakelist').value}`);
    this.tokenNumber = true;
  }
  /******** End Token Number Slot Popup ********/

  /******** Start Token Voucher Popup ********/
  showTokenVoucher() {
    this.tokenVoucher = true;
  }
  /******** End Token Voucher Popup ********/

  /******** Start Counter  ********/
  count() {
      let count = 210;
      count = count - 1;
      if (count === -1) {
        clearInterval(this.counter);
        return;
      }
      let seconds = count % 60;
      let minutes = Math.floor(count / 60);
      let hours = Math.floor(minutes / 60);
      minutes %= 60;
      hours %= 60;

      document.getElementById('timer').innerHTML = minutes + ':' + seconds; // watch for spelling

  }
  /******** End Counter  ********/


  /********  Start Print Invoice ********/
  print() {
    let contents = $('#dvContents').html();
    let frame1 = $('<iframe />');
    frame1[0].name = 'frame1';
    frame1.css({ position: 'absolute', top: '-1000000px' });
    $('body').append(frame1);
    let frameDoc = frame1[0].contentWindow
      ? frame1[0].contentWindow
      : frame1[0].contentDocument.document
      ? frame1[0].contentDocument.document
      : frame1[0].contentDocument;
    frameDoc.document.open();
    //Create a new HTML document.
    frameDoc.document.write('<html><head><title>Print Inoice</title>');
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


  }

  /********  End Print Invoice ********/

  ngOnDestroy(){
    clearInterval(this.counter);
  }

  onChangeCountry(value: any){
    console.log(value);
    if(value){
      if(value ==='USA'){
        this.carMake = [
          { label: 'Audi', value: 'Audi' },
          { label: 'Honda', value: 'Honda' }
        ];

      }else{
        this.carMake = [
          { label: 'Audi', value: 'Audi' },
          { label: 'Ford', value: 'Ford' },
          { label: 'Honda', value: 'Honda' },
          { label: 'BMW', value: 'BMW' },
          { label: 'Fiat', value: 'Fiat' }
        ];
      }
    }
  }

}
