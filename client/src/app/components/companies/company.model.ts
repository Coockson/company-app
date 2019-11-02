export class Company {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public country: string;
    public email: string;
    public phone: string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.address = "";
        this.city = "";
        this.country = "";
        this.email = "";
        this.phone = "";
    }
}