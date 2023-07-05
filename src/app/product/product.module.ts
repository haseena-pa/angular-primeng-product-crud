import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';



import { ProductComponent } from './product.component';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { MessageService } from 'primeng/api';
import { FilterProjectComponent } from './filter-project/filter-project.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    FilterProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AddEditProductModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class ProductModule { }
