import Authentication from "../model/Authentication";
import ResponseAuth from "../model/ResponseAuth";

export default class AuthenticationService {

    static isAuthenticated:boolean = false;

    static login(username: string, password: string): Promise<ResponseAuth> {

        //const isAuthenticated = (username === 'pikachu' && password === 'pikachu');
        let authen = new Authentication(username, password);

        return fetch(`http://localhost:9090/auth`, {
            method: 'POST',
            body: JSON.stringify(authen),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);})

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         this.isAuthenticated = isAuthenticated;
        //         resolve(isAuthenticated);
        //     }, 1000);
        // });
    }
}