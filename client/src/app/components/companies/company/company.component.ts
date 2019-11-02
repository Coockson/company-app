import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../../../services/company.service';
import { CompaniesComponent } from '../../companies/companies.component'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company : Company;
  edit : boolean;
  form : FormGroup;
  details: boolean;


  constructor(private companies :CompaniesComponent, private companyService: CompanyService, private formBuilder: FormBuilder) {
    this.edit = false;
    this.details = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({    
      id  : [this.company.id, [Validators.required]],
      name: [this.company.name, [Validators.required]],
      address: [this.company.address, [Validators.required]],
      city : [this.company.city, [Validators.required]],
      country: [this.company.country, [Validators.required]],
      email: [this.company.email, [Validators.email]],
      phone: [this.company.phone]
    });
  }

  initiateDelete(id){
    this.companies.deleteCompany(id);
  }

  updateCompany(){
    this.edit = !this.edit;
    var tempCompany = {
      //@ts-ignore
      _id:this.company._id,
      id  : this.form.value.id,
      name: this.form.value.name,
      address: this.form.value.address,
      city : this.form.value.city,
      country: this.form.value.country,
      email: this.form.value.email,
      phone: this.form.value.phone
    }

    this.companyService.updateCompany(tempCompany).subscribe( data => {
      //console.log(data);
    });
    this.company.id  = tempCompany.id;
    this.company.name= tempCompany.name;
    this.company.address= tempCompany.address;
    this.company.city = this.form.value.city;
    this.company.country= this.form.value.country;
    this.company.email= this.form.value.email;
    this.company.phone= this.form.value.phone;
  }

}
