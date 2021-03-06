import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceFormControlComponent } from './price-form-control/price-form-control.component';
import { ReactiveFormsModule, FormsModule as TemplateFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PriceFormControlComponent,
  ],
  imports: [
    TemplateFormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  exports: [
    PriceFormControlComponent,
    ReactiveFormsModule,
  ]
})
export class FormsModule { }
