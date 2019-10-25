import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Subscription, combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-example002',
  templateUrl: './example002.component.html',
  styleUrls: ['./example002.component.scss']
})
export class Example002Component implements OnInit, OnDestroy {

  ARS = { code: 'AR$', conversionRate: 60.01 };
  USD = { code: 'US$', conversionRate: 1 };
  EUR = { code: 'EU$', conversionRate: 1.09 };
  currencies = [
    this.ARS,
    this.USD,
    this.EUR
  ];

  form = new FormGroup({
    price: new FormControl('', [Validators.required])
  });

  sub: Subscription;

  priceBS = new Subject<number>();
  price$ = this.priceBS.asObservable();

  currencyBS = new BehaviorSubject<Currency>(this.ARS);
  selectedCurrency$ = this.currencyBS.asObservable();

  constructor() { }

  ngOnInit() {
    this.sub = combineLatest(
      this.price$,
      this.selectedCurrency$
    ).pipe(
      tap(([value, currency]) => {
        const converted = value / currency.conversionRate;
        this.form.controls.price.setValue(`${converted} USD`);
      })
    ).subscribe();
  }

  input(event) {
    const { value } = event.target;
    if (isNaN(value)) {
      this.form.controls.price.setErrors({ NaN: true });
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

}
