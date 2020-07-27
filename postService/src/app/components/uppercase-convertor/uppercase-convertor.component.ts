import { Component, OnInit } from '@angular/core';
import {UppercaseConvertorService} from '../../services/uppercase-convertor.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-uppercase-convertor',
  templateUrl: './uppercase-convertor.component.html',
  styleUrls: ['./uppercase-convertor.component.css']
})
export class UppercaseConvertorComponent implements OnInit {

  public result:any;
  public my_message:string;

  constructor(private _service:UppercaseConvertorService) { }

  ngOnInit(): void {
  }

  public convert(obj):any{
    this._service.convertToUppercase(obj).subscribe(
      res=>this.result=res,
      (err:HttpErrorResponse)=>{
        console.error(err);
      });
  }

}
