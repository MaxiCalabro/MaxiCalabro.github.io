import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { View1Component } from './views/view1/view1.component';
import { View2Component } from './views/view2/view2.component';
import { View3Component } from './views/view3/view3.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from "ngx-mask";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnswerModalComponent } from './views/view1/answer-modal/answer-modal.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import {IgxGridComponent} from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    View1Component,
    View2Component,
    View3Component,
    AnswerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    IgxGridComponent
  ],
  providers: [
    provideNgxMask(),
    provideEnvironmentNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
