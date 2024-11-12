import { EnergyOffer } from "./EnergyOffer";
import { Prosumer } from "./Prosumer";

export class SmartContract {
    contractId: string;
    buyer: Prosumer;
    offerDetails: EnergyOffer;

    constructor(buyer: Prosumer, offerDetails: EnergyOffer) {
        this.contractId = this.generateContractId();
        this.buyer = buyer;
        this.offerDetails = offerDetails;
    }

    // Method to generate a unique contract ID
    private generateContractId(): string {
        return 'SC-' + Math.random().toString(36).substring(2, 15);
    }

    // Method to display contract details
    displayContractDetails(): void {
        console.log(`Contract ID: ${this.contractId}`);
        console.log(`Buyer: ${this.buyer.name}`);
        console.log(`Offer ID: ${this.offerDetails.offerId}`);
        console.log(`Amount: ${this.offerDetails.amount}`);
        console.log(`Price Per Unit: ${this.offerDetails.pricePerUnit}`);
    }
}