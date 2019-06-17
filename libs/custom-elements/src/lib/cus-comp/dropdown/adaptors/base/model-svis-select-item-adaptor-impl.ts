import { LabelProperty, SvisSelectItem } from '../../svis-select-item';
import { ModelSvisSelectItemAdaptorI } from './model-svis-select-item-adaptor-i';

/**
 * Represent the adaptor implementation used to convert from 'T'
 * to 'SvisSelectItem' and vise versa.
 *
 */
export abstract class ModelSvisSelectItemAdaptorImpl<T> implements ModelSvisSelectItemAdaptorI<T> {

  convertToSvisSelectItem(model: T, labelProperty?: LabelProperty, filedName?: string): SvisSelectItem {
    if (model) {
      return {
        label: this.formatSvisSelectItemLabelJson(model, labelProperty, filedName),
        value: this.formatSvisSelectItemValueJson(model)
      };
    }
    // return empty JSON if passed 'T' is null or undefined
    return {
      label: {
        lang1Label: '',
        lang2Label: ''
      },
      value: null
    };
  }

  convertToSvisSelectItems(models: T[], labelProperty?: LabelProperty, filedName?: string): SvisSelectItem[] {
    const svisSelectItemArr = [];
    if (models) {
      models.forEach(model => {
        svisSelectItemArr.push(this.convertToSvisSelectItem(model, labelProperty, filedName));
      });
    }
    return svisSelectItemArr;
  }

  convertToModel(svisSelectItem: SvisSelectItem): T {
    if (svisSelectItem) {
      return svisSelectItem.value as T;
    }
    return null;
  }

  convertToModels(svisSelectItems: SvisSelectItem[]): T[] {
    const convertedBusinessData: T[] = [];
    if (svisSelectItems) {
      svisSelectItems.forEach(svisSelectItem => {
        convertedBusinessData.push(this.convertToModel(svisSelectItem));
      });
    }
    return convertedBusinessData;
  }

  /**
   * create representation for Label JSON object of SvisSelectItem for
   * passed 'T'
   *
   * @param model
   * @param labelProperty
   */
  protected abstract formatSvisSelectItemLabelJson(model: T, labelProperty?: LabelProperty, filedName?: string ) ;

  /**
   * return the formatSvisSelectItemValueJson object of 'SvisSelectItem'
   *
   * @param model
   */
  protected formatSvisSelectItemValueJson(model: T) {
    if (model) {
      return model;
    }
    return null;
  }

  /**
   * create representation for Label JSON object of SvisSelectItem from
   * passed string properties
   *
   * @param model
   */
  protected createLabelJson(lang1Label: string, lang2Label: string) {
    return {
      lang1Label: lang1Label,
      lang2Label: lang2Label
    };
  }
}
