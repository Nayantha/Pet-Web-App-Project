import { ComparisonOperators } from "./ComparisonOperators.ts";

interface QueryField {
    fieldName: string;
    value: any;
    operator: ComparisonOperators;
}

export interface RequestQueryArgs {
    page?: number;
    sort?: string;
    fields?: { [key: string]: { value: any, operator: ComparisonOperators } };
    expand?: string;
    returnFields?: string;
    skipTotal?: boolean;
}

export default class BaseRequestQuery {
    protected queryFields: { [key: string]: QueryField } = {};

    constructor(fields?: { [key: string]: { value: any, operator: ComparisonOperators } }) {
        if (fields) {
            for (const [fieldName, fieldDetails] of Object.entries(fields)) {
                this.queryFields[fieldName] = {
                    fieldName,
                    value: fieldDetails.value,
                    operator: fieldDetails.operator,
                };
            }
        }
    }

    public convertToQueryString(): string {
        const queryParts: string[] = [];

        for (const { fieldName, value, operator } of Object.values(this.queryFields)) {
            if (value !== null && value !== undefined) {
                if (typeof value === 'string') {
                    queryParts.push(`${ fieldName } ${ operator } '${ value }'`);
                } else {
                    queryParts.push(`${ fieldName } ${ operator } ${ value }`);
                }
            }
        }

        return queryParts.join(' && ');
    }

    protected addField(fieldName: string, value: any, operator: ComparisonOperators) {
        this.queryFields[fieldName] = { fieldName, value, operator };
    }
}
