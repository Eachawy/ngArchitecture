export interface SearchVehicleClass{
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[
    {
      transactionId: number,
      boothId: number,
      appointmentId: number,
      appointmentSlotId: number,
      serviceCodes:[],
      vehicleElementList:[],
      trailerHeader:string,
      messageList:[]
    }
  ]
}
