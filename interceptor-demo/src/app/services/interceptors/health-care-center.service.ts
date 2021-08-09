import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent }
    from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HealthCareCenterInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        console.log('We are in intercept');

        req = req.clone({
            headers: req.headers.set('My_Name_Is', 'Geeta From Interceptor')
                .append('Authorization', 'mmcnm@@@bchj153135=')
        })

        return next.handle(req)
    }
}
