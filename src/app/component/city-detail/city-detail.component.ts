import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {Country} from "../../model/country";
import {CityService} from "../../service/city.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  // city :City ={
  //   id:1,
  //   area:1,
  //   description:'',
  //   gdp:1,
  //   name:'',
  //   population:1,
  //   country: {
  //     id :1,
  //     name:'',
  //   }
  // }
  city!:City;
  id!:number;
  constructor(private cityService : CityService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
     this.cityService.findById(this.id).subscribe(result => {
       console.log(result);
       this.city = result;
     },error => {
       console.log(error);
     })
    })
  }

  ngOnInit(): void {
  }
  back():void{
  this.router.navigate([""])
}
}
