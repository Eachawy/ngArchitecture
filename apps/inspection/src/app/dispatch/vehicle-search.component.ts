import { Component, OnInit, OnDestroy} from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl} from '@angular/forms';
import * as $ from 'jquery';
import { VehicleSearchServices } from './service/vehicleSearch.services';
import { ForceValidation } from '@SVIS/common-services';

import { LabelProperty, SvisSelectItem, DefaultAdaptor } from '@SVIS/custom-elements';
import { LanguageStateService } from '@SVIS/language-services';
import { Router } from '@angular/router';
import { VehicleDetailsServices } from './service/vehicleDetails.services';
import { InspectionServices } from '../commonServices/inspectionService';
import { LoadingService } from '@SVIS/layouts';


@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html'
})
export class VehicleSearchComponent implements OnInit, OnDestroy {


  public boothsList: any[] = [];
  public services: any[] = [];
  public servicesLoadingFlag = false;
  public selectedCapturedList: any[] = [];
  public listOfServicesSelected: any[] = [];
  public certificateListItem: SvisSelectItem[];
  public emiratesListItem: SvisSelectItem[];
  public emirateSelected:string;
  public categoriesListItem: SvisSelectItem[];
  public PlateCodeList: SvisSelectItem[];
  public DispatchFG: FormGroup;
  public term: any;
  public noVehicleCaptured: boolean;
  public vehicleCapturedId: number;
  public CaptureListLoadingFlag = false;
  public vehicleCapturedSelected:any;
  public selectedCapturedImage = false;
  public selectedCaptured = false;
  public searchMode = 1;
  public appointmentList: SvisSelectItem[];
  public switchAppointmentSelect: boolean;
  public dailyAppointmentsList:any[] = [];
  public AppointmentLoadingFlag = false;
  public submitObj: any;
  public selectedVehicleItemView: any;
  public showCalender = false;

  public addAppointment = false;

  public cols = [
    { field: 'appointmentId', field2: 'customerName',field3: 'id', header: 'Appointment No.' },
    { field: 'plateDetailsLang1', field2: 'chassis',field3: '',header: 'Plate & Chassis' },
    { field: 'vehicleMake.nameLang1', field2: 'vehicleModel.nameLang1',field3: '',header: 'Make & Model' },
    { field: 'vehicleClass.nameLang1', field2: '',field3: '',header: 'Vehicle Class' },
    { field: 'customerMobile', field2: '',field3: '',header: 'Mobile No.' },
    { field: 'timeFrom', field2: 'timeTo',field3: '',header: 'Sort' }
  ];

  constructor(

      private messageService: MessageService,
      private vehicleSearchServices: VehicleSearchServices,
      private inspectionSer: InspectionServices,
      private validation: ForceValidation,
      private route: Router,
      private loadingSer: LoadingService,
      public  defaultAdaptor: DefaultAdaptor,
      private vehicleDetailsSer: VehicleDetailsServices,
      private languageStateService: LanguageStateService) {}


  ngOnInit() {

    this.getBoothsAndServices();
    this.getCertificateList();
    this.getEmiratesList();
    this.getDailyAppointmentsList();

    this.DispatchFG = new FormGroup({
        chassisNumber: new FormControl(),
        documentNo: new FormControl(),
        mobileNo: new FormControl(),
        transactionNo: new FormControl(),
        appointmentNo: new FormControl(),
        plateSwitch: new FormControl('search'),
        plateNo: new FormControl(),
        plateTheCountry: new FormControl(),
        plateCategory: new FormControl(),
        plateCode: new FormControl(),
        certificate:new FormControl(),
        certificateDate: new FormControl(),
        appointmentSelectedId: new FormControl()
    });
  }

  ngOnDestroy(): void {}


  // part Select Search Mode ---------->
  setSearchMode(mode): void {
      this.searchMode = Number(mode);
  }



  // part of chassis Number ---------->
  chassisNumberValue($event): void {
    this.DispatchFG.patchValue({
      chassisNumber: $event
    });
  }



  // part of Booths Service list and Select Service ---------->
  getBoothsAndServices(): void {
    this.servicesLoadingFlag = true;
    this.inspectionSer.getBooths().subscribe(res => {
       if(res.body['data'] === null || res.body['data'].length <= 0){
        this.servicesLoadingFlag = false;
      return;
      }
      this.inspectionSer.clearServicesBoothList();
      this.boothsList = res.body['data'];
      this.inspectionSer.setBoothSelected = this.boothsList[0].id;
        this.boothsList[0].serviceCodes.forEach(serv => {
        this.inspectionSer.getService(serv).then(response => {
          this.servicesLoadingFlag = false;
          response['status'] = false;
          this.inspectionSer.setServicesBoothList(response);
          this.services = this.inspectionSer.getServicesBoothList;
        });
      });
    });
  }

  boothsSwitch(booth, e): void  {
    this.servicesLoadingFlag = true;
    this.inspectionSer.clearServicesBoothList();
    $('#boothsList a').removeClass('active');
    $(e.target).addClass('active');
    this.inspectionSer.setBoothSelected = booth.id;
    booth.serviceCodes.forEach(code => {
      this.inspectionSer.getService(code).then(response => {
        this.servicesLoadingFlag = false;
        response['status'] = false;
        this.inspectionSer.setServicesBoothList(response);
        this.services = this.inspectionSer.getServicesBoothList;
      })
    });
  }

  onSelectServices(e): void {
    this.listOfServicesSelected = [];
    this.services.forEach(service => {
      if(service.status) {
          this.listOfServicesSelected.push(service.serviceCode);
      }
    });
  }



  // part of Plate Tab Bind lists and Captured Vehicle ------->
  getEmiratesList(): void {
    this.inspectionSer.getEmirates().subscribe(res => {
      this.emiratesListItem = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], LabelProperty.NAME_PROPERTY);
    })
  }

  getCategoriesList(emirateCode:any): void {
    if(emirateCode === null){
      return;
    }
    this.emirateSelected = emirateCode['code'];
    this.inspectionSer.getCategories(this.emirateSelected).subscribe(res => {
        this.categoriesListItem = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], LabelProperty.NAME_PROPERTY);
    })
  }

  getPlateCodeList(categoryCode:any): void {
    if(categoryCode === null){
      return;
    }
    this.inspectionSer.getPlateCode(this.emirateSelected, categoryCode['code']).subscribe(res => {
        this.PlateCodeList = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], LabelProperty.NAME_PROPERTY);
    })
  }
  // Captured Vehicle List
  getCapturedVehicleList(): void {
    this.CaptureListLoadingFlag = true;
    this.vehicleSearchServices.getCapturedVehicle(this.inspectionSer.getBoothSelected).subscribe(res => {
      this.CaptureListLoadingFlag = false;
      this.selectedCapturedList = res.body['data'];
      this.noVehicleCaptured = false;
      if(res.body['data'] === null || res.body['data'].length <= 0){
        this.noVehicleCaptured = true;
      }
    })
  }
  // UI Fn show hide delete resize image
  showSelectedCaptured(): void {
    this.getCapturedVehicleList();
    this.selectedCaptured = true;
  }

  selectVehicleCaptured(i): void {
    $('.content-block').find('.block-info').removeClass('selected');
    $('.content-block .block-info').eq(i).addClass('selected');
    this.selectedCapturedList.forEach(v => {
      if(v.id === Number(this.vehicleCapturedId)) {
        this.vehicleCapturedSelected = v;
      }
    });
  }

  deleteItem(id, index): void {
    this.vehicleSearchServices.removeVehicleCaptured(id).subscribe(res => {
      if(res.body['messages'][0].type === 1){
        this.selectedCapturedList.splice(index, 1);
      }
    });
  }

  removeAllCapturedVehicle() {
    this.vehicleSearchServices.removeAllVehicleCaptured(this.inspectionSer.getBoothSelected).subscribe(res => {
      if(res.body['messages'][0].type === 1){
        this.selectedCapturedList = [];
      }
    })

  }

  submitSelectedCaptured(): void {
    this.selectedCapturedImage=true;
    this.selectedCaptured = false;
  }

  showLargeImage(i): void {
    $('.content-block .image-block').eq(i).find('.show-Image-large').removeClass('hide');
  }

  onMLeave(): void {
    $('.content-block .image-block .show-Image-large').addClass('hide');
  }



  // part of Certificate Tab Bind list ------->
  getCertificateList(): void {
    this.vehicleSearchServices.getCertificate().subscribe(res => {
      this.certificateListItem = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], LabelProperty.NAME_PROPERTY);
    });
  }

  checkCode(cert): void{
    if(cert){
      cert.code === "999" ? this.showCalender = true : this.showCalender = false;
    }
  }


 // part of Appointment Tab Bind lists and Daily Appointments ------->
  getAppointmentsList(): void {
    this.vehicleSearchServices.getAppointments(this.DispatchFG.controls.appointmentNo.value).subscribe(res => {
        this.appointmentList = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], null, 'chassis');
        this.switchAppointmentSelect = true;
    });

  }

  getDailyAppointmentsList(): void {
    this.AppointmentLoadingFlag = true;
    this.vehicleSearchServices.getDailyAppointments().subscribe(res => {
      this.AppointmentLoadingFlag = false;
      this.dailyAppointmentsList = res.body['data'];
    })
  }

  getServiceByCode(item){
    return this.languageStateService.isLang1() ? this.inspectionSer.searchServiceByCode(item).serviceNameLang1 : this.inspectionSer.searchServiceByCode(item).serviceNameLang2;
  }

  onSelectAppointmentItem(): void{
    this.addAppointmentList();
    this.switchAppointmentSelect = false;
  }

   // Appointment List popup ------->
  addAppointmentList(): void {
    this.addAppointment = !this.addAppointment;
  }
  
  selectedVehicleItemViewFn(D) {
    this.selectedVehicleItemView = D;
  }


  onSubmit(): void {
    this.submitObj = {};
    this.submitObj = {
      "boothId": this.inspectionSer.getBoothSelected,
      "serviceCodes": this.listOfServicesSelected,
      "searchMode":this.searchMode
    };
    switch (this.searchMode) {
      case 1:
        const chassisNumber = this.DispatchFG.controls.chassisNumber.value;
        if(chassisNumber !== null){
          this.submitObj["chassis"] = chassisNumber;
          this.searchVehicleSubmit(this.submitObj);
          // console.log(` 1  ======>   ${ JSON.stringify(this.submitObj) }`);
        } else {
          this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Add Chassis Number',closable: true,life: 5000});
        }
        break;
      case 2:
        let plateEmirateCode, plateCategoryCode, plateCodeCode, plateNumber;
        if (this.DispatchFG.controls.plateSwitch.value === "search") {
            plateEmirateCode = this.DispatchFG.controls.plateTheCountry.value !== null ? this.DispatchFG.controls.plateTheCountry.value.value.code : null;
            plateCategoryCode = this.DispatchFG.controls.plateCategory.value !== null ? this.DispatchFG.controls.plateCategory.value.value.code : null;
            plateCodeCode = this.DispatchFG.controls.plateCode.value !== null ? this.DispatchFG.controls.plateCode.value.value.code : null;
            plateNumber = this.DispatchFG.controls.plateNo.value;
        } else {
            plateEmirateCode = this.vehicleCapturedSelected !== undefined ? this.vehicleCapturedSelected.emirate.code: null;
            plateCategoryCode = this.vehicleCapturedSelected !== undefined ? this.vehicleCapturedSelected.plateCategory.code: null;
            plateCodeCode = this.vehicleCapturedSelected !== undefined ? this.vehicleCapturedSelected.plateCode.code: null;
            plateNumber = this.vehicleCapturedSelected !== undefined ? this.vehicleCapturedSelected.plateNumber: null;
        }

        if(plateEmirateCode !== null && plateCategoryCode !== null && plateCodeCode !== null && plateNumber !== null){
          this.submitObj["plateEmirateCode"] = plateEmirateCode;
          this.submitObj["plateCategoryCode"] = plateCategoryCode;
          this.submitObj["plateCodeCode"] = plateCodeCode;
          this.submitObj["plateNumber"] = plateNumber;
          this.searchVehicleSubmit(this.submitObj);
          // console.log(` 2  ======>   ${ JSON.stringify(this.submitObj) }`);
        } else {
          this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Complete process select plate Emirate plate Category plate Code and plate Number',closable: true,life: 5000});
        }

        break;
      case 3:
        const certificateTypeValue = this.DispatchFG.controls.certificate.value !== null ? this.DispatchFG.controls.certificate.value.value.code: null;
        const certificateNumber = this.DispatchFG.controls.documentNo.value;
        const certificateDate = this.DispatchFG.controls.certificateDate.value;

        if ( certificateTypeValue !== null && certificateNumber !== null){
          if (certificateTypeValue === "999" && certificateDate === null)  {
            this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please add Certificate Date',closable: true,life: 5000});
            return;
          }
          this.submitObj["certificateTypeValue"] = certificateTypeValue;
          this.submitObj["certificateNumber"] = certificateNumber;
          this.submitObj["certificateDate"] = certificateDate;
          this.searchVehicleSubmit(this.submitObj);
          // console.log(` 3  ======>   ${ JSON.stringify(this.submitObj) }`);

        } else {
          this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Select Certificate and add Certificate Number',closable: true,life: 5000});
        }

        break;
      case 4:
        const appointVehicleId = this.switchAppointmentSelect === true ?
                                 this.DispatchFG.controls.appointmentSelectedId.value !== null ?
                                 this.DispatchFG.controls.appointmentSelectedId.value.value.id : null :
                                 this.selectedVehicleItemView.id;
        if ( appointVehicleId !== null){
          this.submitObj["appointVehicleId"] = appointVehicleId;
          this.searchVehicleSubmit(this.submitObj);
          // console.log(` 4  ======>   ${ JSON.stringify(this.submitObj) }`);
        } else {
          this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Select your appointment',closable: true,life: 5000});
        }
        break;
      case 5:
        const transactionNo = this.DispatchFG.controls.transactionNo.value;

        if (transactionNo !== null){
          this.submitObj["transactionNo"] = transactionNo;
          this.searchVehicleSubmit(this.submitObj);
          // console.log(` 5  ======>   ${ JSON.stringify(this.submitObj) }`);
        } else {
          this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Add Transaction Number',closable: true,life: 5000});
        }
        break;
      default:
        break;
    }

  }

  searchVehicleSubmit(D): void{
    if(this.listOfServicesSelected.length > 0) {
      this.loadingSer.startLoading();
      this.vehicleSearchServices.searchVehicle(D).subscribe(res => {
        this.loadingSer.stopLoading();
        if(res.body.data){
          this.vehicleDetailsSer.setResultVehicleSearch = res;
          this.route.navigate(['/inspection/VehicleDetails']);
        }else{
          this.onErrorMsg(res);
        }
      });
    } else {
      this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Please Select at least one services',closable: true,life: 5000});
    }
  }

  onReset(): void{}
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

