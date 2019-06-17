export interface CertificatesClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[
      {
          id:number,
          vehicleElementId:number,
          code:string,
          value:string,
          nameLang1:string,
          nameLang2:string
      }
  ]
}
