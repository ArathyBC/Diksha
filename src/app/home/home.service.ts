import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class HomeService{
    // authToken: any;
    // user: any;
    constructor(public http: HttpClient){

    }
    getNews(topc) {
        // return this.http.get('https://staging.ntp.net.in/api/content/v1/search?framework=ts_k-12_2&lang=en&orgdetails=orgName');
        
        return this.http.get<any>('https://swapi.dev/api/people');

    }
    // fetchContent(){
    //     this.http.get<any>('https://staging.ntp.net.in/api/content/v1/search?framework=ts_k-12_2&lang=en&orgdetails=orgName').subscribe(resData => {
    //         console.log(resData);
    //     });
    // }
}