import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { Country } from '../model/country';
import { PlateCode } from '../model/plateCode';
import { PlateSource } from '../model/plateSource';
import { PlateCategory } from '../model/plateCategory';
import { DocumentType } from '../model/documentType';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html'
})
export class VehicleSearchComponent implements OnInit, OnDestroy {
  plateSource: PlateSource[];
  PlateCategory: PlateCategory[];
  plateCode: PlateCode[];
  documentType: DocumentType[];
  public selectedPlateSource: PlateSource[];
  public selectedPlateCategory: PlateCategory[];
  public selectedPlateCode: PlateCode[];
  public selectedDocumentType: DocumentType[];

  country: Country[];
  term: any;
  DespatchFG: FormGroup;
  public selectedcountry: Country[];
  serviceList: any;
  selected: any = {};

  selectedCaptured: boolean = false;
  selectedCapturedImage: boolean = false;
  plateRecognition: boolean = false;
  plateNumber: string = 'plateNumber';
  appointmentName:string = 'appointmentName';
  reservations: boolean = false;
  selectItem : false;



  /******** Start List of service ********/
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
  /******** End List of service ********/

  selectedCaputered: any[] = [
    {
      id: '0',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    },
    {
      id: '1',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    },
    {
      id: '2',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: '../../../assets/images/large-car-selected.png'
    },
    {
      id: '3',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    },
    {
      id: '4',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    },
    {
      id: '5',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    },
    {
      id: '6',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: '../../../assets/images/large-car-selected.png'
    },
    {
      id: '7',
      name: 'Dubai Private A 15248 ',
      date: '10/08/2019',
      time: ' 09:30 AM',
      urlImage: ''
    }
  ];
  reservationsList: any[] = [
    {
      code: 'xs-2587464',
      name: 'dubai a 4574',
      date: '10/08/2019',
      time: ' 09:30 AM',
      sarial:'257852528251'
    },
    {
      code: 'xs-2587464',
      name: 'dubai a 4574',
      date: '10/08/2019',
      time: ' 09:30 AM',
      sarial:'257852528251'
    },
    {
      code: 'xs-2587464',
      name: 'dubai a 4574',
      date: '10/08/2019',
      time: ' 09:30 AM',
      sarial:'257852528251'
    },
    {
      code: 'xs-2587464',
      name: 'dubai a 4574',
      date: '10/08/2019',
      time: ' 09:30 AM',
      sarial:'257852528251'
    }
  ]
  constructor(private messageService: MessageService) {
    this.plateSource = [
      { label: 'SourceOne', value: 'SourceOne' },
      { label: 'SourceTwo', value: 'SourceTwo' },
      { label: 'SourceThree', value: 'SourceThree' }
    ];
    this.PlateCategory = [
      { label: 'CategoryOne', value: 'CategoryOne' },
      { label: 'CategoryTwo', value: 'CategoryTwo' },
      { label: 'CategoryThree', value: 'CategoryThree' }
    ];
    this.plateCode = [
      { label: 'CodeOne', value: 'CodeOne' },
      { label: 'CodeTwo', value: 'CodeTwo' },
      { label: 'CodeThree', value: 'CodeThree' }
    ];
    this.documentType = [
      { label: 'TypeOne', value: 'TypeOne' },
      { label: 'TypeTwo', value: 'TypeTwo' },
      { label: 'TypeThree', value: 'TypeThree' }
    ];
    this.serviceList = [
      {
        id: '1',
        name: 'Booth 01'
      },
      {
        id: '2',
        name: 'Booth 02'
      },
      {
        id: '3',
        name: 'Booth 03'
      },
      {
        id: '4',
        name: 'Booth 04'
      }
    ];
  }
  showSelectedCaptured() {
    this.selectedCaptured = true;
  }

  ngOnInit() {
    this.DespatchFG = new FormGroup({
      'chassis-no-1': new FormControl('3e4rffdcv678025hn'),
      chassisNumber: new FormControl('hello'),
      PlateNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.fullView(false);
  }
  chassNumberValue($event) {
    this.DespatchFG.patchValue({
      chassisNumber: $event
    });
  }

  fullView(stats: boolean): void {
    stats ? $('html').addClass('fullView') : $('html').removeClass('fullView');
  }

  ngOnDestroy(): void {
    this.fullView(false);
  }

  toast() {
    // this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
    // warn error success
    this.messageService.add({
      severity: 'warn',
      summary: 'Service Message',
      detail: 'Error Message',
      closable: true,
      life: 3000000
    });
  }
  onSubmit() {
    if (this.DespatchFG.valid) {
      console.log(this.DespatchFG);
    } else {
      this.validateAllFormFields(this.DespatchFG);
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
