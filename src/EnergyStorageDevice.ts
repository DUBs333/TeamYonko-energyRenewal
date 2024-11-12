export class EnergyStorageDevice {
    id: string;
    capacity: number;            // Maximum capacity of the storage device (in units of energy)
    currentChargeLevel: number;  // Current energy stored in the device (in units of energy)
    deviceType: string;          // Type of energy storage device (e.g., "Battery", "Supercapacitor")

    constructor(id: string, capacity: number, deviceType: string) {
        this.id = id;
        this.capacity = capacity;
        this.deviceType = deviceType;
        this.currentChargeLevel = 0; // Initially, the storage device has no energy stored
    }

    // Method to store energy in the device
    storeEnergy(amount: number): void {
        if (amount < 0) {
            console.log("Amount of energy to store must be positive.");
            return;
        }

        // Calculate the new charge level
        const newChargeLevel = this.currentChargeLevel + amount;

        // If the new charge level exceeds the capacity, limit it to the capacity
        if (newChargeLevel > this.capacity) {
            this.currentChargeLevel = this.capacity;
            console.log(`The storage device is fully charged. Current charge level is ${this.currentChargeLevel}.`);
        } else {
            this.currentChargeLevel = newChargeLevel;
            console.log(`Stored ${amount} units of energy. Current charge level is ${this.currentChargeLevel}.`);
        }
    }

    // Method to discharge energy from the device
    dischargeEnergy(amount: number): void {
        if (amount < 0) {
            console.log("Amount of energy to discharge must be positive.");
            return;
        }

        // If there's not enough energy to discharge
        if (this.currentChargeLevel < amount) {
            console.log(`Not enough energy to discharge. Current charge level is ${this.currentChargeLevel}.`);
        } else {
            this.currentChargeLevel -= amount;
            console.log(`Discharged ${amount} units of energy. Current charge level is ${this.currentChargeLevel}.`);
        }
    }
}

// Example usage
const energyStorageDevice = new EnergyStorageDevice('ESD001', 100, 'Lithium Ion Battery');

energyStorageDevice.storeEnergy(50);  // Store 50 units of energy
energyStorageDevice.storeEnergy(60);  // Attempt to store more than the capacity, should cap at 100
energyStorageDevice.dischargeEnergy(30); // Discharge 30 units of energy
energyStorageDevice.dischargeEnergy(100); // Try to discharge more energy than available
