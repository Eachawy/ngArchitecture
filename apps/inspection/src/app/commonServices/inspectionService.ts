import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { SERVER_API_URL } from "@SVIS/common-services";
import { MessageService } from "primeng/api";

import { ServicesClass } from "../model/servicesClass.model";
import { BoothsClass } from "../model/BoothsClass.model";
import { VehicleClasses } from "../model/vehicleClasses.model";
import { VehicleMakesClasses } from "../model/vehicleMakesClass.model";
import { VehicleModelsClasses } from "../model/vehicleModelsClass.model";
import { VehicleDescriptionsClasses } from "../model/vehicleDescriptionsClass.model";
import { EmiratesClass } from "../model/emiratesClass.model";
import { CategoriesClass } from "../model/categoriesClass.model";
import { PlateCodesClass } from "../model/plateCodesClass.model";




@Injectable({ providedIn: 'root' })
export class InspectionServices {

    private servicesMap = new Map();
    private servicesBoothList: any[] = [];
    private idBoothSelected: number;


    constructor(public http: HttpClient, public messageService: MessageService){}

    /**
     * Get Services List Method.
     */
    getServices():Observable<HttpResponse<ServicesClass>> {
        return this.http.get<ServicesClass>( SERVER_API_URL + 'dispatch/services', {
            observe:'response'
        });
    }

    /**
     * call getServices Method and Mapping Services List in Store with promise if had stored.
     * @param serviceCode
     */
    getService(serviceCode) {

        return new Promise((resolve, reject) => {

            if(this.servicesMap.size === 0) {
                this.getServices().subscribe(res => {
                    res.body['data'].forEach(service => {
                        service['status'] = false;
                        this.servicesMap.set(service.serviceCode, service);
                    });
                    resolve(this.servicesMap.get(serviceCode));
                });
            } else {
                resolve(this.servicesMap.get(serviceCode));
            }

        });

     }

    /**
     * call searchServiceByCode Method to search in services map by service code.
     * @param serviceCode
     */
    searchServiceByCode(serviceCode){
        return this.servicesMap.get(serviceCode);
    }

    /**
     * call getAllServices Method to return services map complete.
     */
    getAllServices(){
        return this.servicesMap;
    }

    /**
     * call getServicesBoothList Method to return private services list for booth
     */
    get getServicesBoothList(){
        return this.servicesBoothList;
    }

    /**
     * call setServicesBoothList Method to declaration new list of services for booth has selected.
     * @param obj
     */
    setServicesBoothList(obj){
        this.servicesBoothList.push(obj);
    }

    /**
     * call clearServicesBoothList Method to clear array of list
     */
    clearServicesBoothList(){
        this.servicesBoothList = [];
    }

    /**
     * Get Booths List Method.
     */
    getBooths(): Observable<HttpResponse<BoothsClass>> {
        return this.http.get<BoothsClass>( SERVER_API_URL + 'dispatch/booths', {
            observe: 'response'
        })
    }

    /**
     * Get selected Booth ID
     */
    get getBoothSelected (){
        return this.idBoothSelected;
    }

    /**
     * Set selected Booth ID
     */
    set setBoothSelected (boothId){
        this.idBoothSelected = boothId;
    }


    getVehicleElementValue(code: string): Observable<HttpResponse<any>> {
        return this.http.post(SERVER_API_URL + 'dispatch/vehicleElementValues', { "vehicleElementCode":code },{
            observe: 'response'
        } )
    }

    getVehicleClasses(): Observable<HttpResponse<VehicleClasses>> {
        return this.http.get<VehicleClasses>( SERVER_API_URL + 'secure/vehicleElement/vehicleClasses',{
            observe: 'response'
        })
    }

    getVehicleMakes(D):Observable<HttpResponse<VehicleMakesClasses>> {
        return this.http.post<VehicleMakesClasses>( SERVER_API_URL + 'secure/vehicleElement/vehicleMakes', D, {
            observe: 'response'
        })
    }

    getVehicleModels(D): Observable<HttpResponse<VehicleModelsClasses>> {
        return this.http.post<VehicleModelsClasses>( SERVER_API_URL + 'secure/vehicleElement/vehicleModels', D, {
            observe: 'response'
        })
    }


    getVehicleDescriptions(D): Observable<HttpResponse<VehicleDescriptionsClasses>> {
        return this.http.post<VehicleDescriptionsClasses>( SERVER_API_URL + 'secure/vehicleElement/vehicleDescriptions', D, {
            observe: 'response'
        })
    }

    getCountry(): Observable<HttpResponse<any>> {
        return this.http.get( SERVER_API_URL + 'secure/plate/countries', {
            observe: 'response'
        })
    }

    /**
     * Get Emirates List Method.
     */
    getEmirates():Observable<HttpResponse<EmiratesClass>> {
        return this.http.get<EmiratesClass>( SERVER_API_URL + 'secure/plate/emirates', {
            observe: 'response'
        })
    }

    /**
     * Get Categories List Method using Argument Take Emirate Code.
     * @param emirateCode
     */
    getCategories(emirateCode):Observable<HttpResponse<CategoriesClass>> {
        return this.http.post<CategoriesClass>( SERVER_API_URL + 'secure/plate/categories', {"emirateCode": emirateCode}, {
            observe:'response'
        })
    }

    /**
     * Get Plate Code List Method using Argument Take Emirate Code and Category Code.
     * @param emirateCode
     * @param categoryCode
     */
    getPlateCode(emirateCode, categoryCode):Observable<HttpResponse<PlateCodesClass>>{
        return this.http.post<PlateCodesClass>( SERVER_API_URL + 'secure/plate/plateCodes',{"emirateCode": emirateCode,"categoryCode": categoryCode}, {
            observe:'response'
        } )
    }

}
