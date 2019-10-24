import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example001',
  templateUrl: './example001.component.html',
  styleUrls: ['./example001.component.scss']
})
export class Example001Component implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z]*')])
  });

  constructor() { }

  ngOnInit() {
    
  }

}
