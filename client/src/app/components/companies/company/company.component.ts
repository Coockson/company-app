import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../../../services/company.service';
import { CompaniesComponent } from '../../companies/companies.component'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company : Company;
  edit : boolean;
  ses = "zaze";

  constructor(private companies :CompaniesComponent, private companyService: CompanyService) {
    this.edit = false;
  }

  ngOnInit() {
  }

  initiateDelete(id){
    this.companies.deleteCompany(id);
  }

  updateCompany(){
    console.log("selam");
    var tempCompany = {
      //@ts-ignore
      _id:this.company._id,
      id  : this.company.id,
      name: this.company.name,
      address: this.company.address,
      city : this.company.city,
      country: this.company.country,
      email: this.company.email,
      phone: this.company.phone
    }

    this.companyService.updateCompany(tempCompany).subscribe();
  }

}
