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

  constructor(public billService: BillService) {}

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

  addItemToPerson(event: Event) {
    const select = event.target as HTMLSelectElement;
    const selectedItem = this.billService.getBill().items.find(item => item.name === select.value);
    if (selectedItem) {
      this.newPerson.items.push(selectedItem);
    }
  }

  removeItemFromPerson(index: number) {
    this.newPerson.items.splice(index, 1);
  }
}