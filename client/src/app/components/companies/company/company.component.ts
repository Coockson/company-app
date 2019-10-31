import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../../../services/company.service';
import { CompaniesComponent } from '../../companies/companies.component'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company : Company;
  edit : boolean;

  constructor(private companies :CompaniesComponent) {

    this.edit = false;
  }

  ngOnInit() {
  }

  initiateDelete(id){
    this.companies.deleteCompany(id);
  }

}
