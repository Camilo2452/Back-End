import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompañiaRoutingModule } from './compañia-routing.module';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompañiaRoutingModule
  ]
})
export class CompañiaModule { }
