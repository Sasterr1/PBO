class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan;
        this.gaji = gaji;
    }

    getInformation() {
        return `nama Karyawan adalah ${this.nama}, dengan jabatan ${this.jabatan} memiliki gaji ${this.gaji}`;
    }

    getHistoryOccupation() {
        this.occupation = ["ojol", "relawan", "komisaris"];
        return this.occupation;
    }
}

const   karyawan1 = new Karyawan("saster", "Developer", 7000000),
        karyawan2 = new Karyawan("farhan", "Operator", 100000);

console.log(karyawan1.getInformation());
console.log(karyawan1.getHistoryOccupation)

