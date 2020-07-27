import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercaseConvertorComponent } from './components/uppercase-convertor/uppercase-convertor.component';
import {HttpClientModule} from '@angular/common/http';
import {UppercaseConvertorService} from './services/uppercase-convertor.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConvertorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ],
  providers: [UppercaseConvertorService],
  bootstrap: [UppercaseConvertorComponent]
})
export class AppModule { }
