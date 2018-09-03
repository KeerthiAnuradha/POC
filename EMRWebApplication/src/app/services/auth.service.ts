import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  loginDetails(username,password){

    const headers = new HttpHeaders(username ? {
      authorization : 'Basic ' + btoa(username + ':' +password)
  } : {});
    return this.http.get("login",{ headers: headers });
  }
}
