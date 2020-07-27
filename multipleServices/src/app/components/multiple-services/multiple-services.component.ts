import { Component, OnInit } from '@angular/core';
import {HelloServiceService} from '../../services/hello-service.service';
import {CustomerServiceService} from '../../services/customer-service.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  public helloResponse:any;
  public customerResponse:any;

  constructor(private _helloService:HelloServiceService,private _customerService:CustomerServiceService) { }

  ngOnInit(): void {
    // this._helloService.helloService().subscribe(res=>this.helloResponse=res);
    // this._customerService.getCustomers().subscribe(res=>this.customerResponse=res);
    forkJoin([this._helloService.helloService(),this._customerService.getCustomers()])
    .subscribe(response=>{
      this.helloResponse=response[0];
      this.customerResponse=response[1];
    })
  }

}
