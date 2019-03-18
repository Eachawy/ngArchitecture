import {
    Component,
    OnInit,
    forwardRef,
    Input,
    ViewChild,
    ElementRef,
    Renderer2, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
selector: 'SVIS-Input-Component',
template: `
       <div  class="group-control ui-inputgroup ui-float-label {{class}}" [ngClass]="{'invalid-input' : validationControl.invalid && validationControl.touched}">
            <ng-container *ngIf="!maskInput">
                <input 
                    #inputElement
                    [value]="value"
                    [type]="type" 
                    [placeholder]="placeholder"
                    [pKeyFilter]="keyFilter"
                    (change)="onChange($event)"
                    (keyup)="onKeyup($event)"
                    (blur)="onBlur($event)"
                    pInputText />
            </ng-container>
            <ng-container *ngIf="maskInput">
                <p-inputMask 
                    #inputElement
                    mask="{{maskInput}}" 
                    [(ngModel)]="value" 
                    [placeholder]="maskInput"
                    (change)="onChange($event)"
                    (keyup)="onKeyup($event)"
                    (blur)="onBlur($event)">
                </p-inputMask>
            </ng-container>
            <i *ngIf="icon" class="icon {{icon}}"></i>
            <label for="PlateNumber" translate>{{lbl}}</label>
                <span *ngIf="!validationControl.errors?.required && validationControl.invalid && validationControl.touched" class="helper" translate>errorMsg.incorrectMsg</span>
                <span *ngIf="validationControl.errors?.required && validationControl.touched" class="helper" translate >{{errorMsg}}</span>
            <ng-content></ng-content>            
        </div>
`,
styles: [],
providers: [
    [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SVISInputComponent), multi: true }
    ]
  ]
})


// \\ Example to using in your page ..
// \\ ================================
    // <SVIS-Input-Component
    //     class="external"                                  ------------external class
    //     [class]="'internal'"                              ------------add internal class
    //     formControlName="email"                           ------------access binding value
    //     [type]="'text'"                                   ------------type
    //     [icon]="'fuel'"                                   ------------icon
    //     [keyFilter]="'email'"                             ------------Using keyFilter for filter data you can using "int - num - money - hex - alpha - alphanum - or custom RegExp"
    //     [maskInput]="'999-99-9999'"                       ------------Using keyFilter or  maskInput
    //     [lbl]="'MyFavourite'"                             ------------lbl name key from localization translate object
    //     [placeholder]="'Hello'"                           ------------place holder
    //     [validationControl]="DespatchFG.controls.email"   ------------access from group "DespatchFG" with from control name "email"
    //     [errorMsg]="'errorMsg.isRequired'"                ------------Error message key from localization translate object
    // >
    // </SVIS-Input-Component>
  
// \\ ================================

export class SVISInputComponent implements OnInit, ControlValueAccessor {

    value = '';
    @Input() class:any;
    @Input() type = 'text';
    @Input() id: string;
    @Input() placeholder = '';
    // @Input() disabled: boolean;
    @Input() keyFilter:RegExp = /^[^]+$/;
    @Input() lbl= '';
    @Input() errorMsg='';
    @Input() validationControl: any;
    @Input() icon: any;
    @Input() maskInput:any;

    // ------------------------------------------------
    constructor (private _renderer: Renderer2) {}


    @ViewChild('inputElement') private _inputElement: ElementRef;
    get inputElement(): ElementRef { return this._inputElement; }
    private _onChange = (_: any) => {};
    private _onTouched = () => {};
    writeValue(obj: any): void { this.value = obj; }
    registerOnChange(fn: any): void { this._onChange = fn; }
    registerOnTouched(fn: any): void { this._onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled); }
    onChange(event: any) { this._onChange(event.target.value); }
    onKeyup(event: any) { this._onChange(event.target.value); }
    onBlur(event: any) { this._onTouched(); }
    // ------------------------------------------------

    ngOnInit () { }

}
