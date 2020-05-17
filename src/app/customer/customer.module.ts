import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomerListComponent } from './list/customer-list.component';
import { UserComponent } from '../user/user.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    // UserComponent
  ],
  exports: [CustomerListComponent],
  imports: [
    CommonModule,
    UserModule
    // GuiListModule
  ]
})
export class CustomerModule {
}
