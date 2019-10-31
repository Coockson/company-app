import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from './company.model'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  company_list : Company[];

  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  show : boolean;

  constructor(private companyService: CompanyService) { 
    this.companyService.getCompanies().subscribe( data =>{
        this.company_list = (<Company[]> data);
        console.log(this.company_list);
      });
      this.show = false;
  }

  ngOnInit() {
    
  }

  addCompany(event){
    event.preventDefault();
    var newCompany: Company = {
      id  : this.id,
      name: this.name,
      address: this.address,
      city : this.city,
      country: this.country,
      email: this.email,
      phone: this.phone
    }
    this.companyService.addCompany(newCompany).subscribe(data => {
      this.company_list.push(newCompany);
      this.id= undefined;
      this.address= undefined;
      this.city= undefined;
      this.country= undefined;
      this.email= undefined;
      this.phone= undefined;
    });
  }

  deleteCompany(id){
    var companies = this.company_list;
    
    this.companyService.deleteCompany(id).subscribe(data => {
            for(var i = 0;i < companies.length;i++){
              //@ts-ignore
                if(companies[i]._id == id){
                  companies.splice(i, 1);
                }
            }
    });
  };
  

}
