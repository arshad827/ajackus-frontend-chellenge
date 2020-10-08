import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()

export class BackendInterceptorComponent implements HttpInterceptor {
    usersData = { name: 'Joe', email: 'joe@gmail.com', password: 'asdf' };
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === "POST" && request.url === 'http://localhost:4200/signup') {
            return of(new HttpResponse({ status: 200, body: this.usersData }));
        }
        next.handle(request);
    }
}