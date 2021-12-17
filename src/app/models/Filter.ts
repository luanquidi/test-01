export class Filter {

    constructor(
        public titleMatch: string,
        public ingredientsQuery: string,
        public type: string,
        public sort: string,
        public number: string,
        public offset: number,
    ) {}
    
}