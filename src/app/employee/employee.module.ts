import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    NgxPaginationModule, 
    Ng2SearchPipeModule, 
    FormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
