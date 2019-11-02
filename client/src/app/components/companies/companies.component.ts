import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from './company.model'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  company_list : Company[];

  company: Company;
  show : boolean;
  form : FormGroup;

  companyForm : FormGroup;

  constructor(private companyService: CompanyService, private formBuilder: FormBuilder) { 
    this.companyService.getCompanies().subscribe( data =>{
        this.company_list = (<Company[]> data);
        console.log(this.company_list);
      });
      this.show = false;
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      
      id  : [null, [Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      city : [null, [Validators.required]],
      country: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phone: [null]
    });


  }

  addCompany(event){
    event.preventDefault();
    var newCompany: Company = {
      id  : this.form.value.id,
      name: this.form.value.name,
      address: this.form.value.address,
      city : this.form.value.city,
      country: this.form.value.country,
      email: this.form.value.email,
      phone: this.form.value.phone
    }
    this.companyService.addCompany(newCompany).subscribe(data => {
      this.company_list.push(newCompany);
      this.form.reset();
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
