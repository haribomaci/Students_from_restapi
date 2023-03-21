// <!--
// File: student.componnt.html
// Author: Tóth Júlia
// Copyright: 2023, Tóth Júlia
// Group: Szoft 2/n
// Date: 2023-03-21
// Github: https://github.com/haribomaci/
// Licenc: GNU GPL
// -->

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
