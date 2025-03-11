
export default class Address {

    id : number;
    street: string;
    city: string;
    number:string;
    country:string;

    constructor(id: number, street:string, city: string, number:string, country:string) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.number = number;
        this.country = country;
    }
}