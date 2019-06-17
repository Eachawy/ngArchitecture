
import { LabelProperty, SvisSelectItem } from '../../svis-select-item';
import { ModelSvisSelectItemAdaptorImpl } from './model-svis-select-item-adaptor-impl';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DefaultAdaptor extends ModelSvisSelectItemAdaptorImpl<any> {


  /**
   * create representation for Label JSON object of SvisSelectItem for
   * passed 'T'
   *
   * @param Model
   * @param labelProperty
   */
  protected formatSvisSelectItemLabelJson(model: any, labelProperty?: LabelProperty, filedName?: string ) {
    if(filedName) {
      return this.createLabelJson(model[filedName], model[filedName]);
    }
    if (labelProperty) {
      switch (labelProperty) {
        case  LabelProperty.NAME_PROPERTY :
        default:
          return this.createLabelJson(model.nameLang1, model.nameLang2);
          break;
        case  LabelProperty.DESCRIPTION_PROPERTY :
          return this.createLabelJson(model.descriptionLang1, model.descriptionLang2);
      }
    }
    // if user didn't provide labelProperty type, return json from name
    return super.createLabelJson(model.nameLang1, model.nameLang2);
  }
}