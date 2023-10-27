import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../view1.component";

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.scss']
})
export class AnswerModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
