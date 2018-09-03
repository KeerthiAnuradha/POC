import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    constructor(private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr).catch(err => {
        if (err instanceof HttpErrorResponse) {
            switch (err.status) {
                case 302:
                case 401:
                this.router.navigate(['']);
                    break;             
                default:
                   
            }
        }

        return Observable.throw(err);
    });;
  }
}