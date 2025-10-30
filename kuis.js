class Employee {
    constructor(name, salary) {
        this.name = name;
        this.baseSalary = salary; 
    }

    calculateBonus() {
    }
}

class FullTimeEmployee extends Employee {
    calculateBonus() {
        let bonusSalary = this.baseSalary * 0.10;
        console.log(`Bonus ${this.name} (Karyawan Tetap, Dengan gaji tetap Rp${this.baseSalary}): ${this.baseSalary} x 10% = Rp${bonusSalary}`);
        return bonusSalary;
    }
}

class ContractEmployee extends Employee {
    calculateBonus() {
        let bonusSalary = this.baseSalary * 0.05;
        console.log(`Bonus ${this.name} (Karyawan Kontrak, Dengan gaji kontrak Rp${this.baseSalary}): ${this.baseSalary} x 5% = Rp${bonusSalary}`);
        return bonusSalary;
    }
}

const GajiFullTime = new FullTimeEmployee("Budi", 8000000);
const GajiContract = new ContractEmployee("Sita", 6000000);

let totalBonus = GajiFullTime.calculateBonus() + GajiContract.calculateBonus();

console.log("---------------------------------");
console.log(`Total Bonus Seluruh Karyawan: Rp${totalBonus}`);