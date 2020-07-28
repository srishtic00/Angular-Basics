import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public id:number;
  public name:string;
  public description:string;
  public price:number;
  
  public createResponse:any;

  constructor(private _service:ProductDataService){}

  ngOnInit(): void {
  }

  public createProduct(product:any){
    this._service.create(product).subscribe(res=>{
      this.createResponse=res;
    })
  }

}
