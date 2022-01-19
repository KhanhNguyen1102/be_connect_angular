import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListCityComponent } from './component/list-city/list-city.component';
import { CityDetailComponent } from './component/city-detail/city-detail.component';
import { CreateCityComponent } from './component/create-city/create-city.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './component/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    CityDetailComponent,
    CreateCityComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
