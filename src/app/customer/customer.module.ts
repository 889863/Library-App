import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    NgxPaginationModule, 
    Ng2SearchPipeModule, 
    FormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
