import { LabelProperty } from '../svis-select-item';
import { Injectable } from '@angular/core';
import { ModelSvisSelectItemAdaptorImpl } from './base/model-svis-select-item-adaptor-impl';
import { ServiceModel } from './model/service-model';
/**
 * Represent the adaptor implementation used to convert from 'ServiceModel'
 * to 'SvisSelectItem' and vise versa.
 *
 */
@Injectable({ providedIn: 'root' })
export class ServiceSvisSelectItemAdaptor extends ModelSvisSelectItemAdaptorImpl<ServiceModel> {


  /**
   * create representation for Label JSON object of SvisSelectItem for
   * passed 'ServiceModel'
   *
   * @param serviceModel
   * @param labelProperty
   */
  protected formatSvisSelectItemLabelJson(serviceModel: ServiceModel, labelProperty?: LabelProperty) {
    if (labelProperty) {
      switch (labelProperty) {
        case  LabelProperty.NAME_PROPERTY :
        default:
          return this.createLabelJson(serviceModel.nameLang1, serviceModel.nameLang2);
          break;
        case  LabelProperty.DESCRIPTION_PROPERTY :
          return this.createLabelJson(serviceModel.descriptionLang1, serviceModel.descriptionLang2);
      }
    }
    // if user didn't provide labelProperty type, return json from name
    return super.createLabelJson(serviceModel.nameLang1, serviceModel.nameLang2);
  }

}
