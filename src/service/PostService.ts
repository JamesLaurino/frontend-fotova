import Post from "../model/Post";

export default class PostService {

    //static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

    static getPostByid(id:number): Promise<Post> {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(error => this.handleError(error));
    }

    static getPosts(): Promise<Post[]> {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }
    static handleError(error: Error): void {
        console.error(error);
    }

    static deletePokemon(post: Post): Promise<{}> {

        return fetch(`http://localhost:3001/pokemons/${post.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));


        // return new Promise(resolve => {
        //     const { id } = pokemon;
        //     this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
        //     resolve({});
        // });
    }

    static addPokemon(post: Post): Promise<Post> {

        return fetch(`http://localhost:3001/pokemons`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

}