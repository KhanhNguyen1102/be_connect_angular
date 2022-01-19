import {Country} from "./country";

export interface City{
  id?:number;
  area?:number;
  description?:string;
  gdp?:number;
  name?:string;
  population?:number;
  country?: Country;
}
