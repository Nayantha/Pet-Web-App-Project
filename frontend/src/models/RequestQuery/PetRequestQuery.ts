import BaseRequestQuery from './BaseRequestQuery';

export default class PetRequestQuery extends BaseRequestQuery {
    constructor(fields?: { [key: string]: { value: any, operator: string } }) {
        super(fields);
    }

    public addNewField(fieldName: string, value: any, operator: string): void {
        this.addField(fieldName, value, operator);
    }
}
