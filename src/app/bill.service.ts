import { Injectable } from '@angular/core';
import { Bill, BillItem, ItemCategory, Person } from './models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private bill: Bill = {
    items: [],
    people: [],
    taxRate: 0.05,
    serviceChargeRate: 0.05
  };

  addItem(item: BillItem) {
    this.bill.items.push(item);
  }

  addPerson(person: Person) {
    this.bill.people.push(person);
  }

  calculateTotal(): number {
    return this.bill.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  calculateTax(): number {
    return this.calculateTotal() * this.bill.taxRate;
  }

  calculateServiceCharge(): number {
    return this.calculateTotal() * this.bill.serviceChargeRate;
  }

  calculateGrandTotal(): number {
    return this.calculateTotal() + this.calculateTax() + this.calculateServiceCharge();
  }

  calculatePersonShare(person: Person): number {
    const personalItems = person.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const sharedItems = this.bill.items
      .filter(item => item.category === ItemCategory.NonDrinks || item.category === ItemCategory.Drinks)
      .reduce((total, item) => total + item.price * item.quantity, 0);
    const sharedItemsPerPerson = sharedItems / this.bill.people.length;
    const taxAndServiceChargePerPerson = (this.calculateTax() + this.calculateServiceCharge()) / this.bill.people.length;

    return personalItems + sharedItemsPerPerson + taxAndServiceChargePerPerson;
  }

  getBill(): Bill {
    return this.bill;
  }

  reset() {
    this.bill = {
      items: [],
      people: [],
      taxRate: 0.05,
      serviceChargeRate: 0.05
    };
  }
}