import { Response } from "@angular/http";

export interface ResponseModel {
    error: boolean;
    data: any;
}

export class ResponseHelper {
    public static Format(response: any, callback: any): void {
        var _response: ResponseModel = {
            error: true,
            data: null,
        };
        
        if(response.status){
            var data = response.json();
            _response.data = data;
            _response.error = (response.statusText == "OK") ? false: true;
        }else{
            _response = response;
        }
        
        callback(_response.error, _response.data);
    }
    public static Raw(response: any, callback: any): void {
        var _response: ResponseModel = {
            error: true,
            data: null
        };
        try {
            var data = response.json();
            if (response.status === 200) {
                _response = {
                    error: false,
                    data: data
                }
            }
        } catch (e) {
        }
        callback(_response.error, _response.data);
    }

    public static External(response: any, callback: any): void {
        var _response: ResponseModel = {
            error: true,
            data: null
        };
        _response = response;
        callback(_response.error, _response.data);
    }
}
