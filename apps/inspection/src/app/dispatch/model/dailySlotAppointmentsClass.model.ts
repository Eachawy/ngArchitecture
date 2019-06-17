export interface DailySlotAppointmentsClass {
  responseType: number,
  messages:[],
  exceptionList:[],
  data:[{
      id: number,
      appointmentId: number,
      ownerType: number,
      customerName: string,
      totalNumber: number,
      reservedNumber: number,
      remainingTime: string,
      vehicleClass: [],
      serviceCodes: []
  }
  ]
}
