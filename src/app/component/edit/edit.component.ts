import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Country} from "../../model/country";
import {FormControl, FormGroup} from "@angular/forms";
import {CountryService} from "../../service/country.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  city!:City;
  id!:number;
  countries!:Country[];
  cityForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
    area: new FormControl(''),
    population: new FormControl(''),
    gdp: new FormControl(''),
    description: new FormControl('')
  });
  constructor(private cityService : CityService,private router:Router,private activatedRoute: ActivatedRoute,private countryService :CountryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.cityService.findById(this.id).subscribe(result => {
        console.log(result);
        this.city = result;
        this.cityForm = new FormGroup({
          id: new FormControl(result.id),
          name: new FormControl(result.name),
          country: new FormControl(result.country),
          area: new FormControl(result.area),
          population: new FormControl(result.population),
          gdp: new FormControl(result.gdp),
          description: new FormControl(result.description)
        });
        this.getListCountry();
      },error => {
        console.log(error);
      })
    })
  }
  getListCountry(){
    this.countryService.getAll().subscribe(rs => {
      this.countries = rs;
      console.log(rs);
    },er => {
      console.log(er);
    })
  }
  ngOnInit(): void {
  }
  submit() {
    const city = this.cityForm.value;
    const country = {
      id : +city.country
    }
    city.country=country;
    console.log(city);
    this.cityService.saveCity(city).subscribe(rs =>{
      console.log("thêm thành công")
    });
    this.cityForm.reset();
  }
}
