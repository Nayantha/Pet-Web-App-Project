import BaseRequestQuery from './BaseRequestQuery';
import { ComparisonOperators } from "./ComparisonOperators.ts";

export default class PetRequestQuery extends BaseRequestQuery {
    constructor(fields?: { [key: string]: { value: any, operator: ComparisonOperators } }) {
        super(fields);
    }

    public addNewField(fieldName: string, value: any, operator: ComparisonOperators): void {
        this.addField(fieldName, value, operator);
    }
}
