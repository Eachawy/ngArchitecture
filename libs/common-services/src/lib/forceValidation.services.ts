import { FormGroup, FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";



@Injectable( { providedIn: 'root'})
export class ForceValidation {
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