export interface DispatchClass {
    responseType: number,
    messages:[],
    exceptionList:[],
    data:[{
      tokenNumber: number,
      laneNumber: string,
      transactionId: number,
      vehicleMake:[],
      vehicleModel: [],
      makeYear: string,
      chassis: string,
      plateDetailsLang1: string,
      plateDetailsLang2: string,
      printTokenServiceList: [],
      totalFees: number,
      barcodeImg: string
  }
    ]
  }

