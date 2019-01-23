import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
declare var CanvasJS: any;



interface CarMake {
  label: string;
  value: string;
}

interface CarModel {
  label: string;
  value: string;
}
interface CarBrand {
  label: string;
  value: string;
}
interface Country {
  label: string;
  value: string;
}
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html'
})
export class VehicleDetailsComponent implements OnInit, OnDestroy {
  addSlot: boolean = false;
  addNewSlot: boolean = false;
  tokenNumber: boolean = false;
  tokenVoucher: boolean = false;
  moreDetails: boolean = false;
  export: boolean = true;

  public cars: CarBrand[];
  public country: Country[];
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
    this.counter = setInterval(this.count, 1000); //1000 will  run it every 1 second
    this.total = 20;
    this.current = 5;

    /******** Start CanvasJS Config ********/
    CanvasJS.addColorSet('greenShades', ['#f0f4f4', '#7b80f4']);
    let chart = new CanvasJS.Chart('chartContainer', {
      colorSet: 'greenShades',
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
      if (count == -1) {
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

  ngOnDestroy(){
    clearInterval(this.counter);
  }

}
