import {
    Component,
    OnInit,
    forwardRef, 
    ElementRef,
    ViewChild,
    Renderer2,
    Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector:'SVIS-Calendar',
    template:`

    <div class="ui-float-label" [ngClass]="{'invalid-input' : validationControl.invalid && validationControl.touched}">
        <p-calendar
            #calendarElement
            [showIcon]="showCalIcon"

            [(ngModel)]="value"

            [dateFormat]="dateFormating"
            [monthNavigator]="true"
            [yearNavigator]="true"
            [yearRange]="calYearRange"
        >
        </p-calendar>
        <label for="calendarElement">{{lbl}}</label>
        <label *ngIf="lblTranslateDynamic" for="calendarElement" translate>{{lbl}}</label>

        <span *ngIf="!validationControl.errors?.required && validationControl.invalid && validationControl.touched" class="helper" translate>errorMsg.incorrectMsg</span>
        <span *ngIf="validationControl.errors?.required && validationControl.touched" class="helper" translate >{{errorMsg}}</span>

    </div>
    
    `,
    providers: [
        [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SVISCalendarComponent), multi: true }
        ]
      ]
})


// <SVIS-Calendar  
//   class="group-control"
//   [formControlName]="el.code"
//   [showCalIcon] = "true"
//   dateFormating="yy"
//   calYearRange="1980:2030"
//   [lblTranslateDynamic]="false"
//   lbl="{{ languageStateService.isLang1() ? el.nameLang1 : el.nameLang2 }}"
//   [validationControl]="vehicleDFG.controls[el.code]"
//   [errorMsg]="'errorMsg.isRequired'"
// >
// </SVIS-Calendar>


export class SVISCalendarComponent implements OnInit{


    value = '';

    @Input() showCalIcon = true;
    @Input() dateFormating;
    @Input() calYearRange;
    @Input() lbl = '';
    @Input() validationControl: any;
    @Input() lblTranslateDynamic = true;
    @Input() errorMsg = '';

    constructor(private _renderer: Renderer2) {}


    @ViewChild('calendarElement') private _calendarElement: ElementRef;
    get inputElement(): ElementRef { return this._calendarElement; }
    private _onChange = (_: any) => {};
    private _onTouched = () => {};
    writeValue(obj: any): void { this.value = obj; }
    registerOnChange(fn: any): void { this._onChange = fn; }
    registerOnTouched(fn: any): void { this._onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this._renderer.setProperty(this._calendarElement['el'].nativeElement.querySelector('input'), 'disabled', isDisabled); }
    onChange(event: any) { this._onChange(event.target.value); }
    onKeyup(event: any) { this._onChange(event.target.value); }
    onBlur(event: any) { this._onTouched(); }
    // ------------------------------------------------


    ngOnInit(){}


}