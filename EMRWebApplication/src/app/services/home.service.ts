import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hl7Config } from '../home/Hl7Config';

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { }
  getEmrDetails(){
    return this.http.get("EMR");
  }

  addnewEMR(emr){
    return this.http.post("EMR",emr);
  }
  deleteEMR(emr) {
    return this.http.delete("EMR/" + emr.configId);
  }
  updateDetails(emr){
    return this.http.put("EMR/" , emr);
  }
  getHL7Details(){
    return this.http.get("HlEngine/getAll");
  }
  updateHL7Details(hl7:Hl7Config){
    console.log(hl7);
    
    return this.http.put("HlEngine/update/"+ hl7.name,null);
  }
}
