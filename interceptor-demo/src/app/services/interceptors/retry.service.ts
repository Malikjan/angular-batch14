import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { retry } from 'rxjs/operators'

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('We are in RetryInterceptor');
        
        return next.handle(req).pipe(
            retry(5)
        );
    }
}
