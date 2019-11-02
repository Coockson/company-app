import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Company } from '../components/companies/company.model'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { 
    console.log("Service initiated");
  }

  getCompanies() {
    return this.http.get("/api/companies")
    //.subscribe(companies => {
      //console.log((<Company>comp).name);
      //console.log(comp);
    //});
  }

  addCompany(newCompany){
    console.log(newCompany);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    
    return this.http.post("/api/company",JSON.stringify(newCompany),{headers: headers});
  }

  deleteCompany(id){
    return this.http.delete('api/company/'+id);
  }

  updateCompany(company){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(company);
    return this.http.put("/api/company/"+company._id, JSON.stringify(company), {headers: headers});
  }
}


