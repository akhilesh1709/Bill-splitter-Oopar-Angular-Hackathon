import { Component } from '@angular/core';
import { BillService } from '../bill.service';
import { BillItem, ItemCategory, Person } from '../models/bill.model';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  newItem: BillItem = {
    name: '',
    quantity: 1,
    price: 0,
    category: ItemCategory.NonDrinks
  };

  newPerson: Person = {
    name: '',
    items: []
  };

  itemCategories = Object.values(ItemCategory);

  constructor(private billService: BillService) {}

  addItem() {
    this.billService.addItem({ ...this.newItem });
    this.newItem = {
      name: '',
      quantity: 1,
      price: 0,
      category: ItemCategory.NonDrinks
    };
  }

  addPerson() {
    this.billService.addPerson({ ...this.newPerson });
    this.newPerson = {
      name: '',
      items: []
    };
  }

  addItemToPerson(item: BillItem) {
    this.newPerson.items.push(item);
  }

  removeItemFromPerson(index: number) {
    this.newPerson.items.splice(index, 1);
  }
}