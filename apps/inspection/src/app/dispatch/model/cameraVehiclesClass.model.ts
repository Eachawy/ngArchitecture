export interface CameraVehiclesClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[
      {
          id:number,
          plateImg:string,
          plateDescLang1:string,
          plateDescLang2:string,
          arrivalTime:string,
          emirate:[],
          plateCategory:[],
          plateCode:[],
          plateNumber:string


      }
  ]
}
