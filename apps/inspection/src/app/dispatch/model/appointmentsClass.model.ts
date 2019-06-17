export interface AppointmentsClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[{
    id: number,
    appointmentId: number,
    chassis: string,
    timeFrom: string,
    timeTo: string,
    serviceCodes: []
  }]
}
