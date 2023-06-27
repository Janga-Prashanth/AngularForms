import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   //to use forms and ReactiveFormsModule to use r forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdformComponent } from './tdform/tdform.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    TdformComponent,
    RformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
