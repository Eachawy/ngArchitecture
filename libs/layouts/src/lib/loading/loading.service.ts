import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class LoadingService {

    private _loading: boolean = false;
    loadingStatus: any = new Subject();

    private _loadingComp: boolean = false;
    loadingCompStatus: any = new Subject();

    get loading():boolean {
        return this._loading;
    }

    set loading(value) {
        this._loading = value;
        this.loadingStatus.next(value);
    }

    startLoading() {
        this.loading = true;
    }

    stopLoading() {
        this.loading = false;
    }


    get loadingComp():boolean {
        return this._loadingComp;
    }

    set loadingComp(value) {
        this._loadingComp = value;
        this.loadingCompStatus.next(value);
    }

    startLoadingComp() {
        this.loadingComp = true;
    }

    stopLoadingComp() {
        this.loadingComp = false;
    }
    
}