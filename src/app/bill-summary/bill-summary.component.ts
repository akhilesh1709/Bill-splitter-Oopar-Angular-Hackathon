import { Component } from '@angular/core';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent {
  constructor(public billService: BillService) {}
}