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
      this.cityService.findById(this.id).subscribe(result => {
        this.city = result;
        this.cityForm = new FormGroup({
          id: new FormControl(result.id),
          name: new FormControl(result.name),
          country: new FormControl(result.country?.id),
          area: new FormControl(result.area),
          population: new FormControl(result.population),
          gdp: new FormControl(result.gdp),
          description: new FormControl(result.description)
        });
        // this.cityForm.setValue(result)
        // Hoặc là setValue() cho cityForm
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
    const city1 = this.cityForm.value;
    const country1 = {
      id : +city1.country
    }
    city1.country=country1;
    this.cityService.updateCity(city1,city1.id).subscribe(result1 =>{
      console.log("sửa thành công")
    });
    this.cityForm.reset();
  }
}
