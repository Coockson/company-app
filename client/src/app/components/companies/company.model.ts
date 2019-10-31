export class Company {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public country: string;
    public email: string;
    public phone: string;

    constructor(id: number, name: string, address: string, city: string, country: string, email: string,phone: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.email = email;
        this.phone = phone;
    }
}