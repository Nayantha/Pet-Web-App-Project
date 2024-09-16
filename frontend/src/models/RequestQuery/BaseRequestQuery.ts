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

export interface Field {
    [key: string]: { value: any; operator: ComparisonOperators; };
}

export default class BaseRequestQuery {
    protected filterData: { [key: string]: QueryField } = {};

    constructor(fields?: { [key: string]: { value: any, operator: ComparisonOperators } }) {
        if (fields) {
            for (const [fieldName, fieldDetails] of Object.entries(fields)) {
                this.filterData[fieldName] = {
                    fieldName,
                    value: fieldDetails.value,
                    operator: fieldDetails.operator,
                };
            }
        }
    }

    public convertToQueryString(): string {
        const queryParts: string[] = [];

        for (const { fieldName, value, operator } of Object.values(this.filterData)) {
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
        this.filterData[fieldName] = { fieldName, value, operator };
    }
}
