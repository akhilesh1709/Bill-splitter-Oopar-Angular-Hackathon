import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BillInputComponent } from './bill-input/bill-input.component';
import { BillSummaryComponent } from './bill-summary/bill-summary.component';
import { BillService } from './bill.service';

@NgModule({
  declarations: [
    AppComponent,
    BillInputComponent,
    BillSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [BillService],
  bootstrap: [AppComponent]
})
export class AppModule { }