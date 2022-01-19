import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../model/city";
const API_URl="http://localhost:8080/api/cities"
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<City[]>{
    return this.httpClient.get<City[]>(API_URl)
  }
  findById(id:any):Observable<City>{
    return this.httpClient.get<City>(API_URl+"/search?id="+`${id}`)
  }
  saveCity(city:City):Observable<City>{
    return this.httpClient.post<City>(API_URl,city)
  }
  deleteCity(id:any){
    return this.httpClient.delete<City>(API_URl+`/${id}`)
  }
  updateCity(city:City,id:any):Observable<City>{
    return this.httpClient.put<City>(API_URl+`/${id}`,city)
  }
}
