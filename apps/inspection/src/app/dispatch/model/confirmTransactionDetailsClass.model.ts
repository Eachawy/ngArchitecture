export interface ConfirmTransactionDetailsClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[  {
    id: number,
    vehicleElementId: number,
    code: string,
    value: string,
    nameLang1: string,
    nameLang2: string,
    presentationType: number,
    dataType: number,
    order: number,
    hintLang1: string,
    hintLang2: string,
    maxValue: number,
    minValue: number,
    mandatory: number,
    source: string,
    editable: boolean,
    systemElement: boolean,
    vehicleClass: string,
    vehicleMake: string,
    vehicleModel: string,
    vehicleDescription: string,
    country: string,
    emirate: string,
    plateCategory: string,
    plateCode: number,
    language: string,
    vehicleElementValues: []
}
  ]
}
