import { LabelProperty, SvisSelectItem } from '../../svis-select-item';

/**
 * An interface provide the business to be implemented
 * by any Implementor Adaptor class to convert from
 * model to Svis select Item and vise versa.
 */

export interface ModelSvisSelectItemAdaptorI<T> {


  /**
   * used to convert the passed model object to
   * SVIS select Item
   *
   * @param model to be converted to SvisSelectItem
   * @param labelProperty : optional Enum value used to determine which
   * label property for model will be used example name and description
   */
  convertToSvisSelectItem(model: T, labelProperty?: LabelProperty): SvisSelectItem;

  /**
   * Used to convert passed array of model to
   * array of SvisSelectItem
   *
   * This function implementation should
   * recursively invoke convertToSvisSelectItem(model: T) function on
   * each model object in modelArr
   *
   * @param modelArr
   * @param labelProperty : optional Enum value used to determine which
   * label property for model will be used example name and description
   */
  convertToSvisSelectItems(modelArr: T[], labelProperty?: LabelProperty): SvisSelectItem[];


  /**
   * used to convert the passed SVIS select Item to
   * original model object.
   *
   * @param svisSelectItem to be converted to original model
   */
  convertToModel(svisSelectItem: SvisSelectItem): T;


  /**
   * Used to convert passed array of SvisSelectItem to
   * array of their original SvisSelectItem.
   *
   * This function implementation should
   * recursively invoke convertToModel(svisSelectItem: SvisSelectItem) function on
   * each SvisSelectItem object in svisSelectItems
   *
   * @param modelArr
   */
  convertToModels(svisSelectItems: SvisSelectItem[]): T[];

}
