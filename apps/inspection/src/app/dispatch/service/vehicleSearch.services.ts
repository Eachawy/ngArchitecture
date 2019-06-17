import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { SERVER_API_URL } from "@SVIS/common-services";
import { MessageService } from "primeng/api";
import { CertificatesClass } from "../model/certificatesClass.model";
import { CameraVehiclesClass } from "../model/cameraVehiclesClass.model";
import { AppointmentsClass } from "../model/appointmentsClass.model";
import { DailyVehicleAppointmentsClass } from "../model/dailyVehicleAppointmentsClass.model";
import { SearchVehicleClass } from "../model/searchVehicleClass.model";



@Injectable({ providedIn: 'root' })
export class VehicleSearchServices {

    constructor(private http: HttpClient, private messageService: MessageService){}

    /**
     * Get Certificate List Method.
     */
    getCertificate():Observable<HttpResponse<CertificatesClass>>{
        return this.http.get<CertificatesClass>( SERVER_API_URL + 'dispatch/vehicleCertificates', {
            observe: 'response'
        })
    }

    /**
     * Get List of vehicle has been captured
     * @param boothId
     */
    getCapturedVehicle(boothId):Observable<HttpResponse<CameraVehiclesClass>> {
        return this.http.post<CameraVehiclesClass>( SERVER_API_URL + 'dispatch/cameraVehicles', {"boothId":boothId}, {
            observe:'response'
        })
    }

    /**
     * Remove One Vehicle has been captured.
     * @param vehicleCapturedId
     */
    removeVehicleCaptured(vehicleCapturedId): Observable<HttpResponse<any>> {
        return this.http.post<any>( SERVER_API_URL + 'dispatch/removeVehicle', {"cameraVehicleId": vehicleCapturedId}, {
            observe: 'response'
        })
    }

    /**
     * Remove All Vehicle has been captured.
     * @param boothId
     */
    removeAllVehicleCaptured(boothId): Observable<HttpResponse<any>> {
        return this.http.post<any>( SERVER_API_URL + 'dispatch/removeAllVehicles', {"boothId":boothId}, {
            observe: 'response'
        })
    }

    /**
     * Get Appointments List Method using Argument Take appointment Number.
     * @param appointmentNo
     */
    getAppointments(appointmentNo):Observable<HttpResponse<AppointmentsClass>> {
        return this.http.post<AppointmentsClass>( SERVER_API_URL + 'dispatch/appointments', {"appointmentNo":appointmentNo}, {
            observe:'response'
        })
    }

    /**
     * Get List of Daily Appointments
     */
    getDailyAppointments(): Observable<HttpResponse<DailyVehicleAppointmentsClass>> {
        return this.http.get<DailyVehicleAppointmentsClass>( SERVER_API_URL + 'dispatch/dailyVehicleAppointments', {
            observe: 'response'
        })
    }

    /**
     * Send Search Criteria.
     * @param searchCriteria
     */
    searchVehicle(searchCriteria): Observable<HttpResponse<SearchVehicleClass>> {
        return this.http.post<SearchVehicleClass>(SERVER_API_URL + 'dispatch/searchVehicle', searchCriteria ,{
            observe: 'response'
        })
    }

}

