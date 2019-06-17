export interface DailyVehicleAppointmentsClass{
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[
    {
      id: number,
      appointmentId: number,
      chassis: string,
      customerMobile: string,
      customerName: string,
      timeFrom: string,
      timeTo: string,
      plateDetailsLang1: string,
      plateDetailsLang2: string,
      serviceCodes:[],
      vehicleMake:[],
      vehicleModel:[],
      vehicleClass:[]
    }
  ]
}
