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
    public readonly page: number;
    public readonly perPage: number = import.meta.env.VITE_PB_PET_LIST_SIZE;

    private readonly sort: string;
    private readonly expand: string;
    private readonly returnFields: string;
    private readonly skipTotal: boolean;

    protected filterData: { [key: string]: QueryField } = {};

    constructor({
                    page = 1,
                    sort = "-created",
                    fields = { adopted: { value: false, operator: ComparisonOperators.Equal }, },
                    expand = '',
                    returnFields = '*',
                    skipTotal = false
                }: RequestQueryArgs) {
        this.page = page;
        this.sort = sort;
        this.expand = expand;
        this.returnFields = returnFields;
        this.skipTotal = skipTotal;

        this.createFieldDataUsingObject(fields);
    }

    private createFieldDataUsingObject(fields: Field) {
        for (const [fieldName, fieldDetails] of Object.entries(fields)) {
            this.filterData[fieldName] = {
                fieldName,
                value: fieldDetails.value,
                operator: fieldDetails.operator,
            };
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
