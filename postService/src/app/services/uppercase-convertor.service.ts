import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConvertorService {

  constructor(private _http:HttpClient) { }

  public convertToUppercase(obj):any{
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase",obj)
  }


  handleError(err){
    console.error(err);
    return Observable.throw(err || "Internal SErver Error");
  }
}
