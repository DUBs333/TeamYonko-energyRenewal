export class Prosumer {
    buyerId: string;
    name: string;

    constructor(buyerId: string, name: string) {
        this.buyerId = buyerId;
        this.name = name;
    }

    // Method to display buyer information (just an example)
    displayInfo(): void {
        console.log(`Buyer: ${this.name}, ID: ${this.buyerId}`);
    }
}