export interface BoothsClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[{
    id: number,
    boothCode: string,
    PRCameraEnable: boolean,
    serviceCodes:[]
}]
}
