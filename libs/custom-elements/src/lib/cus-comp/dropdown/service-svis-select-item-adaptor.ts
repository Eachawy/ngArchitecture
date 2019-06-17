import { SvisSelectItem } from './svis-select-item';
import { ModelSvisSelectItemAdaptorI } from './model-svis-select-item-adaptor-i';
import { ServiceModel } from '../../../../../../apps/inspection/src/app/model/service-model';

export class ServiceSvisSelectItemAdaptor implements ModelSvisSelectItemAdaptorI<ServiceModel> {

  convertToSvisSelectItem(businessDataObject: ServiceModel): SvisSelectItem {
    return {
      label: this.labelJson(businessDataObject),
      value: this.valueJson(businessDataObject)
    };
  }
  
  labelJson(serviceModel: ServiceModel) {
    return {
      lang1Label: serviceModel.nameLang1,
      lang2Label: serviceModel.nameLang2
    };
  }


  /**
   * return the valueJson object of SvisSelectItem
   *
   * @param serviceModel
   */
  private valueJson(serviceModel: ServiceModel) {
    const anotherBusinessObject = serviceModel.anotherBusinesObject;
    return {
      actualData: {
        id: serviceModel.id,
        descriptionLang1: serviceModel.descriptionLang1,
        descriptionLang2: serviceModel.descriptionLang2,
        code: serviceModel.code,
        anotherBusinesObject: {
          id: serviceModel.id,
          descriptionLang1: anotherBusinessObject ? anotherBusinessObject.descriptionLang1 : null,
          descriptionLang2: anotherBusinessObject ? anotherBusinessObject.descriptionLang2 : null
        }
      }
    };
  }


  convertToSvisSelectItems(serviceModels: ServiceModel[]): SvisSelectItem[] {
    const svisSelectItemArr = [];
    serviceModels.forEach(service => {
      svisSelectItemArr.push(this.convertToSvisSelectItem(service));
    });
    return svisSelectItemArr;
  }

  convertFromSelectItem(svisSelectItem: SvisSelectItem): ServiceModel {
    const labelJson = svisSelectItem.label;
    const actualDataJson = svisSelectItem.value.actualData;
    return new ServiceModel(
      actualDataJson.id,
      labelJson.lang1Label,
      labelJson.lang1Label,
      actualDataJson.descriptionLang1,
      actualDataJson.descriptionLang1,
      actualDataJson.code, {
        id: actualDataJson.anotherBusinesObject.id,
        descriptionLang1: actualDataJson.anotherBusinesObject.descriptionLang1,
        descriptionLang2: actualDataJson.anotherBusinesObject.descriptionLang2
      });
  }


  convertFromSelectItems(svisSelectItems: SvisSelectItem[]): ServiceModel[] {
    const convertedBusinessData: ServiceModel[] = [];
    svisSelectItems.forEach(svisSelectItem => {
      convertedBusinessData.push(this.convertFromSelectItem(svisSelectItem));
    });
    return convertedBusinessData;
  }
}
