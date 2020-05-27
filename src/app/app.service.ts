import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get("https://api.covid19india.org/data.json");
  }

  getDistrictData(){
    return this.http.get("https://api.covid19india.org/state_district_wise.json");
  }
}
