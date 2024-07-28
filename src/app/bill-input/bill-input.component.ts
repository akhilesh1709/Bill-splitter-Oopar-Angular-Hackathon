import { Component } from '@angular/core';
import { BillService } from '../bill.service';
import { BillItem, Person, ItemCategory } from '../models/bill.model';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  newItem: BillItem = { name: '', quantity: 1, price: 0, category: ItemCategory.NonDrinks };
  newPerson: Person = { name: '', items: [] };
  newItemQuantity: number = 1;
  itemCategories = Object.values(ItemCategory);

  constructor(public billService: BillService) {}

  addItem() {
    if (this.newItem.name && this.newItem.quantity > 0 && this.newItem.price > 0) {
      this.billService.addItem(this.newItem);
      this.newItem = { name: '', quantity: 1, price: 0, category: ItemCategory.NonDrinks };
    }
  }

  addPerson() {
    if (this.newPerson.name && this.newPerson.items.length > 0) {
      this.billService.addPerson(this.newPerson);
      this.newPerson = { name: '', items: [] };
    }
  }

  addItemToPerson(event: any) {
    const selectedItemName = event.target.value;
    const selectedItem = this.billService.getBill().items.find(item => item.name === selectedItemName);
    if (selectedItem) {
      this.newPerson.items.push({...selectedItem, quantity: this.newItemQuantity});
      this.newItemQuantity = 1;
    }
  }

  removeItemFromPerson(index: number) {
    this.newPerson.items.splice(index, 1);
  }

  updateItemQuantity(index: number, event: any) {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      this.newPerson.items[index].quantity = newQuantity;
    } else {
      this.removeItemFromPerson(index);
    }
  }
}