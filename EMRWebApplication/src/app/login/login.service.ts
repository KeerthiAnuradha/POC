import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Configuration } from '../app.constant';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
  menuVisible: boolean;
  static isLogedIn: boolean;
  loggedInUserName: string;
  loogedinUserId: string;
  UserDetailId: string;
  constructor(private http: Http, private configuration: Configuration) {
    this.menuVisible = false;
  }
  login(userId: any, password: any) {
    var encodedPwd = encodeURIComponent(password);
    var params = "grant_type=password&username=" + userId + "&password=" + encodedPwd + "";

    let header = new Headers({ 'authorization': 'bearer ' ,
    'Access-Control-Allow-Origin' : '*',
'Access-Control-Allow-Credentials':true});
    let options = new RequestOptions();
    options.headers = header;
    return this.http.post(this.configuration.LoginToken, params, options)
      .map(response => {
        if (response.status === 200) {
            localStorage.setItem("token", JSON.stringify(response));
            /* var userDetails = JSON.parse(response.json().UserDetails)[0];
            this.loggedInUserName = userDetails.UserName;
            this.loogedinUserId = userDetails.UserId; */
             return response['_body'];
        }
      });
  }

 
}
