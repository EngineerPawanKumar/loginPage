import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    httpHeaders.append('Authorization','Basic YWFyb2d5YToxMjM0NTY=');
    return this.http.post('http://ec2-35-154-85-224.ap-south-1.compute.amazonaws.com//v2/auth/vendor/login'
                             ,data,{headers:httpHeaders});

  }
}
