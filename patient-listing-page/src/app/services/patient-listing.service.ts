import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http,Response, Headers,RequestOptions } from '@angular/http';
import {Http, Headers, RequestOptions, Response} from '@angular/http';


@Injectable()
export class PatientListingService {
   
  constructor(private http: Http) { 

  }
  getPatientDetails(){
    let headers = new Headers({ "Content-Type": "application/json" });
      headers.append("Accept" , "application/json");
      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("x-auth-token" , "admin@localhost.com#1535446503540#7d469522554337185237a31cd9a3b7f5");
      let options = new RequestOptions({ headers: headers });
    return this.http.get("http://indoffshre01v.hillromvest.com/api/user/patient/search?searchString=a&page=1&per_page=20&sort_by=plastName&asc=true&filter=isDeleted:0;&deviceType=ALL&cacheBuster=1534919581088", options).map(res => {
          if(res){
             return res.json()
          }
         });
  }
}
