import { EnergyStorageDevice } from './EnergyStorageDevice';

describe('EnergyStorageDevice', () => {
    let storageDevice: EnergyStorageDevice;

    beforeEach(() => {
        storageDevice = new EnergyStorageDevice('ESD001', 100, 'Lithium Ion Battery');
    });

    it('should store energy', () => {
        console.log = jest.fn(); // Mock console.log
        storageDevice.storeEnergy(50);

        expect(console.log).toHaveBeenCalledWith('Stored 50 units of energy. Current charge level is 50.');
    });

    it('should cap storage at max capacity', () => {
        console.log = jest.fn(); // Mock console.log
        storageDevice.storeEnergy(150);

        expect(console.log).toHaveBeenCalledWith('The storage device is fully charged. Current charge level is 100.');
    });

    it('should discharge energy', () => {
        console.log = jest.fn(); // Mock console.log
        storageDevice.storeEnergy(100); // Add energy first
        storageDevice.dischargeEnergy(30);

        expect(console.log).toHaveBeenCalledWith('Discharged 30 units of energy. Current charge level is 70.');
    });

    it('should prevent discharging more energy than available', () => {
        console.log = jest.fn(); // Mock console.log
        storageDevice.storeEnergy(100); // Add energy first
        storageDevice.dischargeEnergy(150);

        expect(console.log).toHaveBeenCalledWith('Not enough energy to discharge. Current charge level is 100.');
    });
});

