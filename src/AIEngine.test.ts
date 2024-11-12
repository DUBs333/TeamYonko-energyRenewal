import { AIEngine } from './AIEngine';

describe('AIEngine', () => {
    let aiEngine: AIEngine;

    beforeEach(() => {
        aiEngine = new AIEngine(["Model A", "Model B", "Model C"]);
    });

    it('should generate energy forecast', () => {
        console.log = jest.fn(); // Mock console.log
        aiEngine.generateEnergyForecast();

        expect(console.log).toHaveBeenCalledWith("Generating energy forecast using the following models:");
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Using model:'));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Forecast for'));
    });

    it('should optimize energy usage', () => {
        console.log = jest.fn(); // Mock console.log
        aiEngine.optimizeEnergyUsage();

        expect(console.log).toHaveBeenCalledWith("Optimizing energy usage using the following models:");
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Optimizing using model:'));
        expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Optimized energy usage for'));
    });
});
