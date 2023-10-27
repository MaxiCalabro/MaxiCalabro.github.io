import {Component, signal} from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component {
  openForm = signal<number>(1);

  constructor() {

  }

  formTest1 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  formTest2 = new FormGroup({
    country: new FormControl(''),
    city: new FormControl('')
  });

  formTest3 = new FormGroup({
    birthDay: new FormControl(''),
    birthMonth: new FormControl(''),
    birthYear: new FormControl('')
  });

  protected readonly onchange = onchange;
}
