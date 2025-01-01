import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers:[],
  bootstrap: [AppComponent]

})
export class AppModule { }
