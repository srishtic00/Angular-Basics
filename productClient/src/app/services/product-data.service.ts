import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url:string="http://localhost:8000/api/products/";
  constructor(private _httpClient:HttpClient) { }

  public getProducts():any{
    return this._httpClient.get(this.url).pipe(
      map(res=>{
        return res;
      })
    );
  }

  public getProduct(id:number):any{
    return this._httpClient.get(this.url+id).pipe(
      map(res=>{
        return res;
      })
    );
  }

  public create(product):any{
    return this._httpClient.post(this.url,product).pipe(
      map(res=>{
        return res;
      }));
  }

  public update(product):any{
    return this._httpClient.put(this.url,product).pipe(
      map(res=>{
        return res;
      }));
  }

  public delete(id:number):any{
    return this._httpClient.delete(this.url+id).pipe(
      map(res=>{
        return res;
      }));
  }
}
