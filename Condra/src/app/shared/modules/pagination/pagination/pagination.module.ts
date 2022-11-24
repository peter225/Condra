import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationComponent } from './pagination.component';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [PaginationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginationModule { }
