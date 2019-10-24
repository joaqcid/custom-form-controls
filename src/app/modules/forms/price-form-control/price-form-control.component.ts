import { Component, OnInit, OnDestroy, forwardRef, Self, ElementRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, FormControl, Validators } from '@angular/forms';
import { Subscription, Subject, BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { Currency } from 'src/app/models/currency';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-price-form-control',
  templateUrl: './price-form-control.component.html',
  styleUrls: ['./price-form-control.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => PriceFormControlComponent),
  //     multi: true
  //   }
  // ]
})
export class PriceFormControlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  // ControlValueAccessor
  onTouched: any;
  isDisabled: boolean;
  onChange: any;

  ARS = { code: 'AR$', conversionRate: 60.01 };
  USD = { code: 'US$', conversionRate: 1 };
  EUR = { code: 'EU$', conversionRate: 1.09 };
  currencies = [
    this.ARS,
    this.USD,
    this.EUR
  ];

  sub: Subscription;

  priceBS = new BehaviorSubject<number>(null);
  price$ = this.priceBS.asObservable();

  currencyBS = new BehaviorSubject<Currency>(this.ARS);
  selectedCurrency$ = this.currencyBS.asObservable();
  value: any;

  constructor(
    @Self() public ngControl: NgControl,
    @Self() private elementRef: ElementRef,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    const input$ = fromEvent<any>(this.elementRef.nativeElement.querySelector('input'), 'input').pipe(
      map(event => {
        const { value } = event.target;
        return value;
      })
    );

    this.ngControl.control.setValidators([this.ngControl.control.validator, Validators.pattern('\\d{0,4}(\\.\\d*)? USD')]);

    this.sub = combineLatest(
      this.price$,
      this.selectedCurrency$
    ).pipe(
      tap(([value, currency]) => {
        if (!value) {
          this.onChange(null);
        } else {
          const converted = value / currency.conversionRate;
          const rounded = Math.round(converted * 100) / 100;
          this.onChange(`${rounded} USD`);
        }
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  input(event) {
    const { value } = event.target;
    if (isNaN(value)) {
      this.ngControl.control.setErrors({ NaN: true });
    } else {
      this.priceBS.next(value);
    }
  }

  changeCurrency(currency) {
    this.currencyBS.next(currency);
  }

  // ControlValueAccessor
  writeValue(value: any) {
    if (value) {
      this.priceBS.next(value);
      this.value = value;
    } else {
      this.priceBS.next(null);
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

}
