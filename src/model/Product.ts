
export default class Product {
    id: number;
    name: string;
    price: number;
    url: string;
    quantity: number;

    constructor(id: number, name: string, price: number, url: string,quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.quantity = quantity;
    }
}