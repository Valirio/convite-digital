import { v4 as uuid, validate} from "uuid";

export default class Id {
    static novo() : string {
        //return `${this.hash()}-${this.hash()}-${this.hash()}`;
        return uuid();
    }

    static valido(id: string): boolean {
        return validate(id);
    }
}