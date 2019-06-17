/**
 * Represent the json structure used
 * in 'SvisDropDownMenuComponent'
 */
export interface SvisSelectItem {
  // define two properties for label
  // to be used according to current language
  label: {
    lang1Label: string,
    lang2Label: string
  },
  value: any
}


/**
 * Enum used to hold all possible properties
 * to be used in Label of `SvisSelectItem` when converting
 * from model to 'SvisSelectItem'
 *
 * Example : if some component want to view drop down menu whose label
 * is provided from the name property of model while another
 * component want to view drop down menu whose label
 * is provided from the description property of model
 *
 */
export enum LabelProperty{
  ID = 1,
  NAME_PROPERTY = 2,
  DESCRIPTION_PROPERTY = 3,
  SINGLE_PROPERTY = 4
}
