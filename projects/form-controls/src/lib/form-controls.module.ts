import { NgModule } from '@angular/core';
import { PriceFormControlComponent } from './price-form-control/price-form-control.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PriceFormControlComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  exports: [
    PriceFormControlComponent,
    ReactiveFormsModule,
  ]
})
export class FormControlsModule { }
