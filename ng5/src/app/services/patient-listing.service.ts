import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http,Response, Headers,RequestOptions } from '@angular/http';
import {Http, Headers, RequestOptions, Response} from '@angular/http';


@Injectable()
export class PatientListingService {
  tokenid: any;
   
  constructor(private http: Http) { 

  }
  getPatientDetails(token){
    this.tokenid =token;
    console.log("is it returning", this.tokenid);
    let headers = new Headers({ "Content-Type": "application/json" });
      headers.append("Accept" , "application/json");
      headers.append("Access-Control-Allow-Origin", "*");
      console.log("lksajhd",this.tokenid);
      headers.append("x-auth-token" ,this.tokenid);
      let options = new RequestOptions({ headers: headers });
    return this.http.get("http://indoffshre01v.hillromvest.com/api/user/patient/search?searchString=a&page=1&per_page=20&sort_by=plastName&asc=true&filter=isDeleted:0;&deviceType=ALL&cacheBuster=1534919581088", options).map(res => {
          if(res){
             return res.json()
          }
         });
  }
}
