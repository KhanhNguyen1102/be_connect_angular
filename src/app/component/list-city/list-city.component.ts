import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {
  cities!:City[];
  constructor(private cityService : CityService,private router:Router) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(result => {
      this.cities = result;
      console.log(result);
    },error => {
      console.log(error);
    })
  }
  deleteCity(id:any){
    this.cityService.deleteCity(id).subscribe(rs =>{
      console.log("xóa thành công")
      this.cityService.getAll().subscribe(result => {
        this.cities = result;
        console.log(result);
      },error => {
        console.log(error);
      })
    },er => {
      console.log(er)
    })
  }
  showDetail(id:any):void{
    this.router.navigate(["/detail/" + id])
  }
  showFormCreate():void{
    this.router.navigate(["create"])
  }
  showFormEdit(id:any):void{
    this.router.navigate(["edit/" +id])
  }
}
