## Features

- Split the bill based on categories: Veg, Non-Veg, Drinks, and Non-Drinks.
- Calculate and include taxes (GST and Service Charge).
- Simple, user-friendly interface for easy bill splitting.
- Share the cost of shared items among all participants.
- Allow one person to pay the bill while others contribute their share.

## Technologies Used

- Angular
- TypeScript
- HTML
- CSS

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/oopar-club-bill-splitter.git
    ```
2. Navigate to the project directory:
    ```sh
    cd oopar-club-bill-splitter
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the application:
    ```sh
    ng serve
    ```
5. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Enter the details of the bill, including item names, quantities, prices, and amounts.
2. Specify the participants and what each person had.
3. The application will calculate the share for each participant, including their share of shared items and taxes.
4. The summary will show the amount each person owes and the total amount to be paid by the person who paid the bill.

## Example

Suppose there is a bill as below:

| Item            | Quantity | Price | Amount |
|-----------------|----------|-------|--------|
| Chicken Biryani | 4        | 395   | 1580   |
| Apple Milkshake | 1        | 355   | 355    |
| Penne Pasta Veg | 1        | 375   | 375    |
| Veg Biryani     | 1        | 325   | 325    |
| French Fries    | 2        | 175   | 350    |
| Water           | 5        | 20    | 100    |

- **Total Quantity**: 14 
- **Sub Total**: Rs. 3085
- **GST**: 5% - Rs. 154
- **Service Charge**: 5% - Rs. 154
- **Grand Total**: Rs. 3393

The bill is split among 6 people:
- Person A, B, C, and D had Chicken Biryani (One Plate each).
- Person E had Penne Pasta (One Plate).
- Person F had Veg Biryani (One Plate) and Apple Milkshake (One).
- French Fries and Water Bottles are shared among all 6 of them.
- All taxes are divided among all of them.

Person A pays the bill to the restaurant and everyone else pays their individual contribution based on what they had to Person A.
