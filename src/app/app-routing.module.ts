import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCityComponent} from "./component/list-city/list-city.component";
import {CityDetailComponent} from "./component/city-detail/city-detail.component";
import {CreateCityComponent} from "./component/create-city/create-city.component";

const routes: Routes = [
  {
    path: '',
    component: ListCityComponent
  },
  {
    path: 'detail/:id',
    component: CityDetailComponent
  },
  {
    path: 'create',
    component: CreateCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
