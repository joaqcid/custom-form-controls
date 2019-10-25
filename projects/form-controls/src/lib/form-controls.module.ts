import { NgModule } from '@angular/core';
import { PriceFormControlComponent } from './price-form-control/price-form-control.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PriceFormControlComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  exports: [
    PriceFormControlComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormControlsModule { }
