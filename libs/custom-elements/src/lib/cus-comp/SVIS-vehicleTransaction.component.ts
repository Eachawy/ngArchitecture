import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LanguageStateService } from "@SVIS/language-services";
import { PresentationType, mandatory, code, field} from './enum/TransactionVehicle.enum'
import { InspectionServices } from "apps/inspection/src/app/commonServices/inspectionService";
import { DefaultAdaptor } from "./dropdown/adaptors/base/defult-adaptor";
import { LabelProperty } from './dropdown/svis-select-item';
import { ForceValidation } from "@SVIS/common-services";
import { ServiceSvisSelectItemAdaptor } from "./dropdown/adaptors/service-svis-select-item-adaptor";

@Component({
    selector:'SVIS-VehicleTransaction',
    template:`
    
    <form [formGroup]="vehicleDFG" *ngIf="TransactionData">
        <div class="form-row">


        <ng-container *ngFor="let el of eleVehicle; let i = index;">

                <SVIS-Input-Component
                    [ngClass]="{'show-more-details' : i > 12}"
                    [class.d-block]="moreDetails"
                    *ngIf="el.presentationType === 3  && el.code !== '43' "
                    class="group-control"
                    [lblTranslateDynamic]="false"
                    [formControlName]="el.code"
                    [id]="'el.code'"
                    [type]="'text'"
                    [icon]="'plate-no'"
                    lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
                    [validationControl]="vehicleDFG.controls[el.code]"
                    [errorMsg]="'errorMsg.isRequired'"
                >
                </SVIS-Input-Component>

                <SVIS-Calendar  
                    *ngIf="el.code == '43'"
                    class="group-control"
                    [formControlName]="el.code"
                    [showCalIcon] = "true"
                    dateFormating="yy"
                    calYearRange="1980:2030"
                    [lblTranslateDynamic]="false"
                    lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
                    [validationControl]="vehicleDFG.controls[el.code]"
                    [errorMsg]="'errorMsg.isRequired'"
                >
                </SVIS-Calendar>

                <svis-drop-down-menu
                    [ngClass]="{'show-more-details' : i > 12}"
                    [class.d-block]="moreDetails"
                    *ngIf="el.presentationType == '2' && el.code !== '44' "
                    class="group-control"
                    [lblTranslateDynamic]="false"
                    [formControlName]="el.code"
                    [filtered]="true"
                    [optionsValue]="listOfObj[el.code]"
                    [formControlValidation]="vehicleDFG.controls[el.code]"
                    [adaptor]="defaultAdaptor"
                    lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
                ></svis-drop-down-menu>

                <svis-drop-down-menu
                    [ngClass]="{'show-more-details' : i > 12}"
                    [class.d-block]="moreDetails"
                    *ngIf="el.presentationType == '2' && el.code === '44'"
                    class="group-control"
                    [multiple]="true"
                    [lblTranslateDynamic]="false"
                    [formControlName]="el.code"
                    [filtered]="true"
                    [optionsValue]="listOfObj[el.code]"
                    [formControlValidation]="vehicleDFG.controls[el.code]"
                    [adaptor]="defaultAdaptor"
                    lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
                ></svis-drop-down-menu>

                <SVIS-autoComplete
                    [ngClass]="{'show-more-details' : i > 12}"
                    [class.d-block]="moreDetails"
                    *ngIf="el.presentationType == '1'"
                    class="group-control" 
                    [lblTranslateDynamic]="false"
                    [formControlName]="el.code" 
                    [suggestionsObj]="listOfObj[el.code]" 
                    (valueChangedEvent)="lookupLists(el.code,$event)" 
                    lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
                    [validationControl]="vehicleDFG.controls[el.code]" 
                    [errorMsg]="' errorMsg.isRequired '">
                </SVIS-autoComplete>

        </ng-container>


        </div>

        <a class="link view-all" [class.view-details]="moreDetails" (click)="showMoreDetails()" *ngIf="eleVehicle.length > 12">
        {{
            'Dispatch.vehicleDetails.viewAllVehicleDetails'
                | translate
            }}
        </a>
        
        <button class="btn btn-red continue" (click)="onSubmit()">
        {{
          'Dispatch.vehicleDetails.continue'
            | translate
        }}
      </button>
    </form>


    `
})



export class SVISVehicleTransactionComponent implements OnInit {

    @Input() TransactionData;
    @Output() VehicleTransaction = new EventEmitter<any>();
   
    private presentationType =  PresentationType; // ENUM
    private code = code;    // ENUM
    private Field = field;    // ENUM


    public vehicleElementFirstList = ['25','26','41','42','36','43','45','16','33', '54','13','14','15'];
    public eleVehicle: any[] = [];
    public vehicleElementMap = new Map();
    public vehicleDFG: FormGroup;
    public moreDetails = false;

    public listOfObj = {};

    constructor(
            private inspectionServices: InspectionServices, 
            public languageStateService: LanguageStateService,
            private validation: ForceValidation,
            public serviceSvisSelectItemAdaptor: ServiceSvisSelectItemAdaptor,
            public  defaultAdaptor: DefaultAdaptor) {}


    ngOnInit(): void {
        if(this.TransactionData){
            this.mappingVehicleElementList();
        }
    }


    mappingVehicleElementList(): void {
        const FG = {};
        const restOfTheEle = [];

        this.TransactionData.vehicleElementList.forEach(el => {
          this.vehicleElementMap.set(el.code, el);
          if(this.vehicleElementFirstList.indexOf(el.code) < 0){
                FG[el.code] = this.generator_Form(el);
                restOfTheEle.push(el)
            }
        });

        this.vehicleElementFirstList.forEach(CD => {
            FG[CD] = this.generator_Form(this.vehicleElementMap.get(CD));
            this.eleVehicle.push(this.vehicleElementMap.get(CD));
        });


        this.eleVehicle.push(...restOfTheEle);
        this.vehicleDFG = new FormGroup(FG);

    }


    onSubmit () {

        if(this.vehicleDFG.valid){
            let val;
            this.TransactionData.vehicleElementList.forEach(el => {

                if(this.vehicleDFG.controls[el.code].dirty === true){

                    if(el.code === this.code.MODEL_YEAR_TYPE){
                        val = this.vehicleDFG.controls[el.code].value.toISOString().substring(0, 4);
                    }else {
                        if(el.presentationType === this.presentationType.Value_List){
                            if(this.vehicleDFG.controls[el.code].value !== null){
                                if(el.code !== code.COLOR_TYPE){
                                    val = [this.vehicleDFG.controls[el.code].value];
                                }else {
                                    val = this.vehicleDFG.controls[el.code].value
                                }
                            }
                        }else {
                            val = this.vehicleDFG.controls[el.code].value;
                        }
                    }
    
                    el[this.checkField(el)] = val;
                }

              });
            this.VehicleTransaction.emit(this.TransactionData);
        }else {
            this.validation.validateAllFormFields(this.vehicleDFG);
        }
    }
    /**
     * Show All Form
     */
    showMoreDetails(): void {
        this.moreDetails = !this.moreDetails;
    }
    /**
     * 
     * @param codeElement 
    */
    vehicleElementValue(codeElement: string): void {
        this.inspectionServices.getVehicleElementValue(codeElement).subscribe(res => {
            if(res.body.responseType === 1) {
                this.listOfObj[codeElement] = this.defaultAdaptor.convertToSvisSelectItems(res.body['data'], LabelProperty.NAME_PROPERTY);
            }
        });
    }   
    /**
     * 
     * @param value 
     */
    convertible_ValueList(value){
        return this.defaultAdaptor.convertToSvisSelectItems(value, LabelProperty.NAME_PROPERTY)[0];
    }
    /**
     * 
     * @param value 
     */
    convertible_ValueLists(value){
        return this.defaultAdaptor.convertToSvisSelectItems(value, LabelProperty.NAME_PROPERTY);
    }
    /**
     * 
     * @param codeElement 
     * @param parameter 
     */
    lookupLists(codeElement: string, parameter: any): void {
        switch (codeElement) {
            case code.VEHICLE_CLASS_TYPE:
                this.inspectionServices.getVehicleClasses().subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            case code.VEHICLE_MAKE_TYPE:
                    const parameterEl = this.languageStateService.isLang1() ? {"nameLang1":parameter.query} : {"nameLang2":parameter.query}
                    this.inspectionServices.getVehicleMakes(parameterEl).subscribe(res => {
                        this.listOfObj[codeElement] = res.body['data'];
                    });

                    // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value['id']));
                
                break;
            case code.VEHICLE_MODEL_TYPE:
                const VehicleMakeId = this.vehicleDFG.controls['41'].value['id'] ? this.vehicleDFG.controls['41'].value['id'] : '';
                const vehicleClassId = this.vehicleDFG.controls['26'].value['id'] ? this.vehicleDFG.controls['26'].value['id'] : ''; 
                const ModelsParameter = {"VehicleMakeId":VehicleMakeId, "vehicleClassId":vehicleClassId, "nameLang1":parameter.query};

                this.inspectionServices.getVehicleModels(ModelsParameter).subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));

                break;
            case code.BODY_TYPE_TYPE:
                const DescriptionsParameter = this.vehicleDFG.controls['26'].value['id'] ? { "vehicleClassId": this.vehicleDFG.controls['26'].value['id'] }  : ''; 
                this.inspectionServices.getVehicleDescriptions(DescriptionsParameter).subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });


                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            case code.NATIONALITY_TYPE:
            case code.PLATE_ORIGIN_TYPE:
            case code.VEHICLE_ORIGIN_TYPE:
                this.inspectionServices.getCountry().subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            case code.PLATE_CATEGORY_TYPE:
                const PlateParameter = this.vehicleDFG.controls['54'].value['code'] ? this.vehicleDFG.controls['54'].value['code']  : '';
                this.inspectionServices.getCategories(PlateParameter).subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            case code.PLATE_CODE_TYPE:
                const emirateSelected = this.vehicleDFG.controls['54'].value['code'] ? this.vehicleDFG.controls['54'].value['code']  : '';
                const PlateCatParameter = this.vehicleDFG.controls['13'].value['code'] ? this.vehicleDFG.controls['13'].value['code']  : '';
                this.inspectionServices.getPlateCode(emirateSelected, PlateCatParameter).subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            case code.PLATE_EMIRATE:
                this.inspectionServices.getEmirates().subscribe(res => {
                    this.listOfObj[codeElement] = res.body['data'];
                });

                // console.log(this.vehicleDFG.value + '=====> ' + JSON.stringify(this.vehicleDFG.controls[codeElement].value));
                break;
            default:
                break;
        }
    }
    /**
     * 
     * @param cases 
     * @param control 
     */
    checkEditable(cases, control){
        return setTimeout(() => { cases !== null ? control.disable() : control.enable(); }, 100);
    }
    /**
     * 
     * @param Obj 
     */
    generator_Form(Obj) {
        let formControl;
        const condition = Obj.systemElement && 
                          Obj.code !== code.PLATE_ORIGIN_TYPE && 
                          Obj.code !== code.PLATE_EMIRATE && 
                          Obj.code !== code.PLATE_CATEGORY_TYPE && 
                          Obj.code !== code.PLATE_CODE_TYPE && 
                          Obj.code !== code.PLATE_NO_TYPE && 
                          Obj.code !== code.PLATE_DETAILS;
            if(this.conditionCases(Obj) === 1){
                Obj.code === code.MODEL_YEAR_TYPE ? 
                formControl = new FormControl(new Date(Obj[this.checkField(Obj)]), Obj.systemElement ? Validators.required : null) : 
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null);
                this.checkEditable(Obj[this.checkField(Obj)], formControl); 
            }
            if(this.conditionCases(Obj) === 2){
                this.vehicleElementValue(Obj.code);
                formControl = new FormControl(this.convertible_ValueList(Obj[this.checkField(Obj)]), Obj.systemElement ? Validators.required : null); 
                if(Obj.code === code.COLOR_TYPE){
                        formControl = new FormControl(this.convertible_ValueLists(Obj[this.checkField(Obj)]), Obj.systemElement ? Validators.required : null); // this.convertible_ValueList(Obj[this.checkField(Obj)])
                }
                this.checkEditable(Obj[this.checkField(Obj)], formControl);
            }
            if(this.conditionCases(Obj) === 3){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null);
                this.checkEditable(Obj[this.checkField(Obj)], formControl);
            }
            if(this.conditionCases(Obj) === 4){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null); 
                this.checkEditable(Obj[this.checkField(Obj)], formControl); 
            }
            if(this.conditionCases(Obj) === 5){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null); 
                this.checkEditable(Obj[this.checkField(Obj)], formControl);
            }
            if(this.conditionCases(Obj) === 6){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null); 
                this.checkEditable(Obj[this.checkField(Obj)], formControl);
            }
            if(this.conditionCases(Obj) === 7){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null);
                this.checkEditable(Obj[this.checkField(Obj)], formControl);
            }
            if(this.conditionCases(Obj) === 8){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null); 
                this.checkEditable(Obj[this.checkField(Obj)], formControl); 
            }
            if(this.conditionCases(Obj) === 9){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null); 
                this.checkEditable(Obj[this.checkField(Obj)], formControl); 
            }
            if(this.conditionCases(Obj) === 10){
                formControl = new FormControl(Obj[this.checkField(Obj)], condition ? Validators.required : null);  
                this.checkEditable(Obj[this.checkField(Obj)],formControl);
            }
            if(this.conditionCases(Obj) === 11){
                formControl = new FormControl(null, Obj.systemElement ? Validators.required : null); 
            }
        return formControl;
    }
    /**
     * 
     * @param Obj 
     */
    checkField(Obj){
        let field_value;
            if(this.conditionCases(Obj) === 1){field_value = this.Field.value;}
            if(this.conditionCases(Obj) === 2){field_value = this.Field.vehicle_Element_Values;}
            if(this.conditionCases(Obj) === 3){field_value = this.Field.vehicle_Class;}
            if(this.conditionCases(Obj) === 4){field_value = this.Field.country;}
            if(this.conditionCases(Obj) === 5){field_value = this.Field.vehicle_Make;}
            if(this.conditionCases(Obj) === 6){field_value = this.Field.vehicle_Model;}
            if(this.conditionCases(Obj) === 7){field_value = this.Field.plate_Category;}
            if(this.conditionCases(Obj) === 8){field_value = this.Field.plate_Code;}
            if(this.conditionCases(Obj) === 9){field_value = this.Field.emirate;}
            if(this.conditionCases(Obj) === 10){field_value = this.Field.vehicle_Description;}
        return field_value;
    }


    conditionCases(Obj){
        let caseType;
        switch (Obj.presentationType) {
            case this.presentationType.Single_Value:
                caseType = 1;
                break;
            case this.presentationType.Value_List:
                caseType = 2;
                break;
            case this.presentationType.Lookup:
                switch (Obj.code) {
                    case  code.VEHICLE_CLASS_TYPE:
                        caseType = 3;
                        break;
                    case  code.NATIONALITY_TYPE:
                    case  code.PLATE_ORIGIN_TYPE:
                    case  code.VEHICLE_ORIGIN_TYPE:
                        caseType = 4;
                        break;  
                    case  code.VEHICLE_MAKE_TYPE:
                        caseType = 5;
                        break; 
                    case  code.VEHICLE_MODEL_TYPE:
                        caseType = 6;
                        break;
                    case  code.PLATE_CATEGORY_TYPE:
                        caseType = 7;
                        break;
                    case  code.PLATE_CODE_TYPE:
                        caseType = 8;
                        break;
                    case  code.OWNER_EMIRATE_TYPE:
                    case  code.PLATE_EMIRATE:
                        caseType = 9;
                        break;
                    case  code.BODY_TYPE_TYPE:
                        caseType = 10;
                        break;

                    default:
                        caseType = 11;
                        break;
                }
                break;
            default:
                break;
        }
        return caseType;
    }


}    


