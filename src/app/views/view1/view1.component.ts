import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AnswerModalComponent } from "./answer-modal/answer-modal.component";

export interface DialogData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: string;
  id: string;
}

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    id:new FormControl('', Validators.required),
  });

  constructor(
    public dialog: MatDialog
  ) { }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.openDialog('500ms');
  }
  openDialog(enterAnimationDuration: string): void {
    const dialogRef= this.dialog.open(AnswerModalComponent, {
      data: {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phoneNumber: this.form.value.phoneNumber,
        location: this.form.value.location,
        id: this.form.value.id
      },
      width: '550px',
      enterAnimationDuration
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  ngOnInit(): void {
  }


}
