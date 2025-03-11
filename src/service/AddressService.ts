import Address from "../model/Address";

export default class AddressService {
    static getPosts(): Promise<Address[]> {
        return fetch('http://localhost:8080/api/v1/auth/address')
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }
    static handleError(error: Error): void {
        console.error(error);
    }
}