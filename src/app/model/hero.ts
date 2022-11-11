export interface Hero {
    id: number;
    name: string;
    phone: string
}

export class HeroModel {
    constructor(
        public name : string,
        public phone: string
    ){}
}