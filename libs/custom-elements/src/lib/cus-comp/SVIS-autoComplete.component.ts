import {
    Component,
    OnInit,
    forwardRef,
    Input,
    ViewChild,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageStateService } from '@SVIS/language-services';


@Component({
selector: 'SVIS-autoComplete',
template: `
    <div class="ui-float-label"
        [ngClass]="{'invalid-input' : validationControl.invalid && validationControl.touched}">
        <p-autoComplete 
            [suggestions]="suggestionsObj" 
            (completeMethod)="onChange($event)" 
            (onSelect)="onChange($event)"  
            [field]=checkLanguage()
            [ngModelOptions]="{standalone: true}"

            [(ngModel)]="selectedValues"
            
            #autoCompleteElement
            [id]="id"
            [placeholder]="placeholder"
            [disabled]="disabled"
            (change)="onChange($event)"
            (keyup)="onKeyup($event)"
            (blur)="onBlur($event)">
        </p-autoComplete>
        <label *ngIf="lblTranslateDynamic" for="selectElement" translate>{{lbl}}</label>
        <label *ngIf="!lblTranslateDynamic" for="selectElement">{{lbl}}</label>
            <span *ngIf="!validationControl.errors?.required && validationControl.invalid && validationControl.touched" class="helper" translate>errorMsg.incorrectMsg</span>
            <span *ngIf="validationControl.errors?.required && validationControl.touched" class="helper" translate >{{errorMsg}}</span>
  </div>
`,
styles: [],
providers: [
    [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SVISAutoCompleteComponent), multi: true },
        // { provide: NG_VALIDATORS, useExisting: forwardRef(() => chassisNumberPanel), multi: true }
      ]
  ]
})




// <SVIS-autoComplete
// class="group-control" 
// formControlName="plateCode" 
// [suggestionsObj]="emirateResults" 
// (valueChangedEvent)="emirateResultsMethod($event)" 
// (onSelect)="onSelectLookup($event)"
// [lbl]="'Dispatch.vehicleSearch.selectCategory'"
// [validationControl]="DespatchFG.controls.plateTheCountry" 
// [errorMsg]="' errorMsg.isRequired '">
// </SVIS-autoComplete>


export class SVISAutoCompleteComponent implements OnInit, ControlValueAccessor {

    selectedValues: [];
    value:[];
    @Input() suggestionsObj: [];
    @Input() id: string;
    @Input() placeholder = '';
    @Input() disabled: boolean;
    @Output() valueChangedEvent = new EventEmitter<any>();
    @Input() lbl = '';
    @Input() errorMsg = '';
    @Input() validationControl: any;
    @Input() lblTranslateDynamic = true;

    // ------------------------------------------------
    constructor (private _renderer: Renderer2, public languageState: LanguageStateService) {}


    @ViewChild('autoCompleteElement') private _autoCompleteElement: ElementRef;
    get autoCompleteElement(): ElementRef { return this._autoCompleteElement; }
    private _onChange = (_: any) => {};
    private _onTouched = () => {};
    writeValue(obj: any): void { this.selectedValues = obj; }
    registerOnChange(fn: any): void { this._onChange = fn; }
    registerOnTouched(fn: any): void { this._onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { 
        this._renderer.setProperty(this._autoCompleteElement['inputEL'].nativeElement, 'disabled', isDisabled); 
    }
    onChange(event: any) { this._onChange(event); this.valueChangedEvent.emit(event); }
    onKeyup(event: any) { } // this.onChange(event);
    onBlur(event: any) { this._onTouched(); }
    // ------------------------------------------------

    ngOnInit () { }
    checkLanguage(){
        return this.languageState.isLang1() ? 'nameLang1' : 'nameLang2' ;
    }

}
