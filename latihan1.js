class FruitBasket {
    constructor(fruitBasket) {
        this.fruitBasket = [];
    }

    addItem(fruit) {
        this.fruitBasket.push(fruit);
        return `Menambahkan ${fruit} ke dalam keranjang`;
    }

    removeItem() {
        const removeFruit = this.fruitBasket.pop();
        return `Menghapus ${removeFruit} dari keranjang`
    }

    getInformation() {
        const list = this.fruitBasket.join('\n');
        return `Ini adalah list buah dalam keranjang : \n${list}`
    }
}

const fruits = new FruitBasket();
console.log(fruits.addItem("Pear"));
console.log(fruits.addItem("Rambutan"));
console.log(fruits.addItem("Anggur"));
console.log(fruits.addItem("Apel"));
console.log(fruits.addItem("Mangga"));

console.log(fruits.removeItem());

console.log(fruits.getInformation());