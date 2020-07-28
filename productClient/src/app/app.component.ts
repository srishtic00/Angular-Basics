import { Component } from '@angular/core';
import {ProductDataService} from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products:any;

  constructor(private _service:ProductDataService){}

  ngOnInit()
  {
    this._service.getProducts().subscribe(res=>{
      this.products=res;
    })
  }

  // public createProduct(product:any){
  //   this._service.create(product).subscribe(res=>{
  //     this.createResponse=res;
  //   })
  // }

  // public updateProduct(product:any){
  //   this._service.update(product).subscribe(res=>{
  //     this.updateResponse=res;
  //   })
  // }

  // public deleteProduct(id:number){
  //   this._service.delete(id).subscribe(res=>{
  //     this.deleteResponse=res;
  //   })
  // }
}
