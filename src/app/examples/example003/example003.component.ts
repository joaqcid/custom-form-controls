import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example003',
  templateUrl: './example003.component.html',
  styleUrls: ['./example003.component.scss']
})
export class Example003Component implements OnInit {

  form = new FormGroup({
    price: new FormControl(100, [Validators.required]),
    price2: new FormControl(100, [Validators.required]),
    price3: new FormControl(100, [Validators.required]),
    price4: new FormControl(100, [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

}
