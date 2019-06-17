export interface VehicleMakesClasses {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[
      {
          id:number,
          code:string,
          nameLang1:string,
          nameLang2:string,
      }
  ]
}
