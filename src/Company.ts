import faker from 'faker';
import {Mappable} from './CustomMap'

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: { lat: number; long: number };

    constructor(){
        this.companyName = faker.company.companyName(); 
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            long: parseFloat(faker.address.longitude())
        }
    }

    
    markerContent(): string {
        return `
        <h1>Company Name: ${this.companyName}</h1>
        <h4>Catchphrase: ${this.catchPhrase}</h4>
        `
    }
}
