import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './reducers/index';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer })

  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class AppModule { }
