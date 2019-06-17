import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SvisSelectItem } from './dropdown/svis-select-item';
import { ModelSvisSelectItemAdaptorI } from './dropdown/adaptors/base/model-svis-select-item-adaptor-i';
import { LanguageStateService } from '@SVIS/language-services';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'svis-drop-down-menu',
  template: `
    <div class="ui-float-label"
         [ngClass]="{'invalid-input' : formControlValidation.invalid && formControlValidation.touched, 'multipleStyle':multiple}">
      <ng-template [ngIf]="multiple">
        <p-multiSelect [options]="optionsValue"
                       name="selectedVal"
                       class="custom-dropdown"
                       [filter]="filtered"
                       [filterBy]="languageStateService.isLang1()? 'label.lang1Label' : 'label.lang2Label'"
                       [filterPlaceHolder]="filterPlaceholder"
                       optionLabel="label"
                       #selectElement
                       (onChange)="onChange($event)"
                       (onBlur)="onBlur($event)"
                       [(ngModel)]="selectedValues">

          <ng-template let-selectedItems pTemplate="selectedItems">
            <div *ngFor="let val of selectedItems" class="ui-multiselected-item-token ui-corner-all">
              <img *ngIf="showImage" src="../assets/images/car/{{val.label}}.png"/>
              <span>{{ languageStateService.isLang1() ? val.label.lang1Label : val.label.lang2Label }}</span>
            </div>
          </ng-template>

          <ng-template let-item pTemplate="item">
            <div class="ui-helper-clearfix">
              <img *ngIf="showImage" src="../assets/images/car/{{item.label}}.png"/>
              <div class="name">{{languageStateService.isLang1() ? item.label.lang1Label : item.label.lang2Label  }}</div>
            </div>
          </ng-template>

        </p-multiSelect>
      </ng-template>

      <ng-template [ngIf]="!multiple">
        <p-dropdown [options]="optionsValue"
                    name="selectedVal"
                    class="custom-dropdown select-icon"
                    [filter]="filtered"
                    [filterBy]="languageStateService.isLang1()? 'label.lang1Label' : 'label.lang2Label'"
                    [filterPlaceholder]="filterPlaceholder"
                    optionLabel="label"
                    [editable]="editableComponent"
                    #selectElement
                    (onChange)="onChange($event)"
                    (onBlur)="onBlur($event)"
                    [(ngModel)]="selectedValue"
                    [showClear]="clearBtn"
                    [autoDisplayFirst]="false"
                    [placeholder]="placeholderComponent">

          <ng-template let-selectedItem pTemplate="selectedItem">
            <img *ngIf="showImage" src="../assets/images/car/{{selectedItem.label}}.png"/>
            <span>{{ languageStateService.isLang1() ? selectedItem.label.lang1Label : selectedItem.label.lang2Label }}</span>
          </ng-template>

          <ng-template let-item pTemplate="item">
            <div class="ui-helper-clearfix">
              <img *ngIf="showImage" src="../assets/images/car/{{item.label}}.png"/>
              <div
                class="name">{{languageStateService.isLang1() ? item.label.lang1Label : item.label.lang2Label  }}</div>
            </div>
          </ng-template>

        </p-dropdown>
      </ng-template>

      <label *ngIf="lblTranslateDynamic" for="selectElement" translate>{{lbl}}</label>
      <label *ngIf="!lblTranslateDynamic" for="selectElement">{{lbl}}</label>
      <span
        *ngIf="formControlValidation.errors?.required && formControlValidation.invalid && formControlValidation.touched"
        class="helper"
        translate>errorMsg.isRequired</span>
    </div>
  `,
  providers: [
    [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SvisDropDownMenuComponent), multi: true }
    ]
  ]
})

/*
<svis-drop-down-menu class="group-control"
                     [multiple]="true"  // set multiple selection to true or false
                     formControlName="selectedcountry" // reactive form cortrol name to be used when submit
                     [optionsValue]="servicesDataSelectItems" //Options list items
                     [formControlValidation]="VehicleFG.controls.selectedcountry" // FormControl object passed from the parrent controller to be used in validation
                     (valueChangedEvent)="onSelectOneService($event)" // Event Emitter object to emit the selected value in case that the parent
                                                                      // component want to listen to selection
                     lbl="Country"> // bundle key to be translated
</svis-drop-down-menu>

*/

export class SvisDropDownMenuComponent implements OnInit, ControlValueAccessor {


  // represent the final selected value returned from component
  selectedValue: SvisSelectItem;
  selectedValues: SvisSelectItem[];

  // determine whether the component select multiple items or not
  @Input() multiple; // by default, set to false

  // determine whether to use search filter or not
  @Input() filtered = true; // by default, set to true

  //default searchfilter place holder
  @Input() filterPlaceholder = 'Type To Search';

  @Input() lblTranslateDynamic = true;

  // determine whether to show image for each item in option list items
  @Input() showImage: boolean;

  // Options list items
  @Input() optionsValue: SvisSelectItem[];

  // place holder for component
  @Input() placeholderComponent=' ';

  // Label of Component
  @Input() lbl = '';

  // FormControl object passed from the parrent controller
  // to be used in validation
  @Input() formControlValidation: any;


  @Input() adaptor: ModelSvisSelectItemAdaptorI<any>;

  // Event Emitter object to emit the selected value in case that the parent
  // component want to listen to selection
  @Output() valueChangedEvent = new EventEmitter<any>();


  @Input() clearBtn = true;


  @Input() editableComponent = false;


  // ------------------------------------------------ Implementation Custom component
  constructor(private _renderer: Renderer2,
              public languageStateService: LanguageStateService) {
  }


  @ViewChild('selectElement') private _selectElement: ElementRef;

  ngOnInit() {
  }

  get selectElement(): ElementRef {
    return this._selectElement;
  }

  private _onChange = (_: any) => {
  };

  private _onTouched = () => {
  };

  writeValue(obj: any): void {
    if (this.multiple) {
      this.selectedValues = obj;
    } else {
      this.selectedValue = obj;
    }
    this.onChange({ value: obj });
    if(this.selectedValue !== null){
      setTimeout(() => {
        this._renderer.addClass(this._selectElement['el'].nativeElement, 'ui-inputwrapper-filled')   //setAttribute(this._selectElement['el'].nativeElement)
      }, 100);
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * register current element as touched to view validation error if needed
   * @param event
   */
  onBlur(event: any) {
    this._onTouched();
  }
  setDisabledState?(isDisabled: boolean): void { 
    // this._renderer.setProperty(this._selectElement['el'].nativeElement, 'disabled', isDisabled); 
    if(isDisabled){
      this._renderer.addClass(this._selectElement['el'].nativeElement, 'disabled'); 
    }
  } 
  /**
   * function used to trigger changes on dropdown menu
   * @param event : The new selected value
   */
  onChange(event: any) {
    this._onChange( this.multiple ? this.adaptor.convertToModels(event.value) : this.adaptor.convertToModel(event.value));

    // emit changes to listeners only if current event emitter has subscribers
    if (this.valueChangedEvent.observers.length > 0) {
      if (this.multiple) {
        this.valueChangedEvent.emit(this.adaptor.convertToModels(this.selectedValues));
      } else {
        this.valueChangedEvent.emit(this.adaptor.convertToModel(this.selectedValue));
      }
    }
    
  }
}
