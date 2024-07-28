export enum ItemCategory {
    Veg = 'Veg',
    NonVeg = 'Non-Veg',
    Drinks = 'Drinks',
    NonDrinks = 'Non-Drinks'
  }
  
  export interface BillItem {
    name: string;
    quantity: number;
    price: number;
    category: ItemCategory;
  }
  
  export interface Person {
    name: string;
    items: BillItem[];
  }
  
  export interface Bill {
    items: BillItem[];
    people: Person[];
    taxRate: number;
    serviceChargeRate: number;
  }