import { Prosumer } from "./Prosumer";
import { SmartContract } from "./SmartContract";

// EnergyOffer class representing an energy offer.
export class EnergyOffer {
    offerId: string;
    amount: number;
    pricePerUnit: number;

    constructor(offerId: string, amount: number, pricePerUnit: number) {
        this.offerId = offerId;
        this.amount = amount;
        this.pricePerUnit = pricePerUnit;
    }

    // Method to create the offer
    createOffer(): void {
        console.log(`Creating offer with ID: ${this.offerId}`);
        console.log(`Amount: ${this.amount}`);
        console.log(`Price per unit: ${this.pricePerUnit}`);
    }

    // Method for accepting the offer, which creates a smart contract
    acceptOffer(buyer: Prosumer): SmartContract {
        console.log(`Offer ${this.offerId} accepted by ${buyer.name}`);
        return new SmartContract(buyer, this);
    }
}

// Example usage
const buyer = new Prosumer('123', 'John Doe');
const energyOffer = new EnergyOffer('OFFER001', 1000, 0.05);
energyOffer.createOffer();

const contract = energyOffer.acceptOffer(buyer);
contract.displayContractDetails();