export interface Api {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat:string,
            lon:string
        }
    },
    phone: string,
    website: string,
    company:{
        name: string,
        catchPhrase: string,
        bs:string
    }
}
