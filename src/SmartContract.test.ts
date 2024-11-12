import { SmartContract } from './SmartContract';
import { Prosumer } from './Prosumer';
import { EnergyOffer } from './EnergyOffer';

describe('SmartContract', () => {
    let smartContract: SmartContract;
    let buyer: Prosumer;
    let energyOffer: EnergyOffer;

    beforeEach(() => {
        buyer = new Prosumer('123', 'John Doe');
        energyOffer = new EnergyOffer('OFFER001', 1000, 0.05);
        smartContract = new SmartContract(buyer, energyOffer);
    });

    it('should generate a unique contract ID', () => {
        expect(smartContract.contractId).toMatch(/^SC-/);  // Check if contract ID starts with "SC-"
    });

    it('should display contract details', () => {
        console.log = jest.fn(); // Mock console.log
        smartContract.displayContractDetails();

        expect(console.log).toHaveBeenCalledWith(`Contract ID: ${smartContract.contractId}`);
        expect(console.log).toHaveBeenCalledWith(`Buyer: John Doe`);
        expect(console.log).toHaveBeenCalledWith('Offer ID: OFFER001');
        expect(console.log).toHaveBeenCalledWith('Amount: 1000');
        expect(console.log).toHaveBeenCalledWith('Price Per Unit: 0.05');
    });
});
