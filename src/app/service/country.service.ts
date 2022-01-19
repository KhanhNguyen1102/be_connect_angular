import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../model/city";
const API_URl = "http://localhost:8080/api/countries"
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<City[]>{
    return this.httpClient.get<City[]>(API_URl)
  }
}
