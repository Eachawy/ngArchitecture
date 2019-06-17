import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from "@angular/common/http";

import { SERVER_API_URL } from "@SVIS/common-services";
import { MessageService } from "primeng/api";
import { DailySlotAppointmentsClass } from "../model/dailySlotAppointmentsClass.model";
import { ConfirmTransactionDetailsClass } from "../model/confirmTransactionDetailsClass.model";
import { DispatchClass } from "../model/dispatch.model";



@Injectable({ providedIn: 'root' })
export class VehicleDetailsServices {


    private resultVehicleSearch : any;

    constructor(private http: HttpClient, private messageService: MessageService){}


    // Get result Vehicle Search obj
    get getResultVehicleSearch (){
        return this.resultVehicleSearch;
    }

    // Set result Vehicle Search obj
    set setResultVehicleSearch (rvs){
        this.resultVehicleSearch = rvs;
    }

    getSlotAppointments(vehicleClass): Observable<HttpResponse<DailySlotAppointmentsClass>>{
        return this.http.post<DailySlotAppointmentsClass>( SERVER_API_URL +  'dispatch/dailySlotAppointments', {"vehicleClassId":vehicleClass},{
            observe: 'response'
        })
    }


    confirmTransaction(transactionDetails):Observable<HttpResponse<ConfirmTransactionDetailsClass>> {
        return this.http.post<ConfirmTransactionDetailsClass>( SERVER_API_URL +  'dispatch/confirmTransactionDetails', transactionDetails, {
            observe: 'response'
        })
    }


    dispatch(trsId, tokenNum):Observable<HttpResponse<DispatchClass>> {
        return this.http.post<DispatchClass>( SERVER_API_URL +  'dispatch', {"trsId":trsId, "tokenNumber":tokenNum}, {
            observe: 'response'
        })
    }


    calcServiceAttemptNo(obj):Observable<HttpResponse<any>> {
        return this.http.post(  SERVER_API_URL +  'dispatch/calculateServiceAttemptNumber', obj, {
         observe:'response'
        })
    }

    // this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
    // this.messageService.add({severity: 'error',summary: 'Service Message',detail: 'Error Message',closable: true,life: 3000000});
    // warn error success

}

