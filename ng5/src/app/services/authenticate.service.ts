import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http,Response, Headers,RequestOptions } from '@angular/http';
import {Http, Headers, RequestOptions, Response} from '@angular/http';


@Injectable()
export class AuthenticateService {
   
  constructor(private http: Http) { 

  }
  authenticateUser(username, password){
    let headers = new Headers({ "Content-Type": "application/json" });
      headers.append("Accept" , "application/json");
      headers.append("Access-Control-Allow-Origin", "*");
      // headers.append("x-auth-token" , "admin@localhost.com#1535446503540#7d469522554337185237a31cd9a3b7f5");
      let options = new RequestOptions({ headers: headers });
    // return this.http.post("http://indoffshre01v.hillromvest.com/api/authenticate", options).map(res => {
    //       if(res){
    //          return res.json()
    //       }
    //      });
    let data1 = {
      username : username,
      password : password
    };
    return this.http.post("http://indoffshre01v.hillromvest.com/api/authenticate", data1, options).map(res => {
         if(res){
            console.log(res.json());
              return res.json()
              }
             
    });
            
}
  
}
