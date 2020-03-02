import { Component, OnInit, OnDestroy, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { Currency } from 'src/app/models/currency';
import { tap } from 'rxjs/operators';

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
    // @Self() private elementRef: ElementRef,
    @Self() @Optional() public ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    // const input$ = fromEvent<any>(this.elementRef.nativeElement.querySelector('input'), 'input').pipe(
    //   map(event => {
    //     const { value } = event.target;
    //     return value;
    //   })
    // );

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

  input(event) {
    // this.onTouched();
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // ControlValueAccessor
  onTouched: () => {};
  onChange: (value) => {};
  isDisabled: boolean;

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
