import { Component, OnInit } from '@angular/core';
import {Country} from "../../model/country";
import {CityService} from "../../service/city.service";
import {Router} from "@angular/router";
import {CountryService} from "../../service/country.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {
  countries!:Country[];
  cityForm = new FormGroup({
    // id: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
    area: new FormControl(''),
    population: new FormControl(''),
    gdp: new FormControl(''),
    description: new FormControl('')
  });
  constructor(private countryService : CountryService,private router:Router,private cityService: CityService) { }

  ngOnInit(): void {
    this.countryService.getAll().subscribe(result => {
      this.countries = result;
      console.log(result);
    },error => {
      console.log(error);
    })
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
