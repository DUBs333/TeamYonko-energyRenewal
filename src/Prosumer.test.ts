import { Prosumer } from './Prosumer';

describe('Prosumer', () => {
    let buyer: Prosumer;

    beforeEach(() => {
        buyer = new Prosumer('123', 'John Doe');
    });

    it('should display buyer information', () => {
        console.log = jest.fn(); // Mock console.log
        buyer.displayInfo();

        expect(console.log).toHaveBeenCalledWith('Buyer: John Doe, ID: 123');
    });
});
