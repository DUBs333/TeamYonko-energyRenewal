import { EnergyOffer } from './EnergyOffer';
import { Prosumer } from './Prosumer';
import { SmartContract } from './SmartContract';

describe('EnergyOffer', () => {
    let energyOffer: EnergyOffer;
    let buyer: Prosumer;

    beforeEach(() => {
        buyer = new Prosumer('123', 'John Doe');
        energyOffer = new EnergyOffer('OFFER001', 1000, 0.05);
    });

    it('should create an energy offer', () => {
        console.log = jest.fn(); // Mock console.log
        energyOffer.createOffer();

        expect(console.log).toHaveBeenCalledWith('Creating offer with ID: OFFER001');
        expect(console.log).toHaveBeenCalledWith('Amount: 1000');
        expect(console.log).toHaveBeenCalledWith('Price per unit: 0.05');
    });

    it('should accept the energy offer and create a smart contract', () => {
        const contract = energyOffer.acceptOffer(buyer);
        
        expect(contract).toBeInstanceOf(SmartContract);
        expect(contract.buyer.name).toBe('John Doe');
        expect(contract.offerDetails.offerId).toBe('OFFER001');
    });
});
