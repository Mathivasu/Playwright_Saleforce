import {faker} from "@faker-js/faker";

export class FakerData{
   static getFirstName(): string {
        return faker.person.firstName();
    }
   static getLastName(): string{
    return faker.person.lastName();
   }
   //static getMobileNumber():string{
    //return getPhoneNumber();
   static getEmail():string{
    return faker.internet.email();
   }
   static getAddress():string{
    return faker.location.streetAddress();
   }
   static getPinCode() {
    return faker.location.zipCode('######');
    }
    static number(): number {
    return faker.number.int({ min: 1000, max: 9999 });
}
  
   }



   