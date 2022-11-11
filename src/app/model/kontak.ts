export interface Kontak {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
}


export class KontakModel {
    constructor(
        public firstName : string,
        public lastName: string,
        public phone: string
    ){}
}