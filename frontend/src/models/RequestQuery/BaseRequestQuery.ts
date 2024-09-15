interface QueryField {
    fieldName: string;
    value: any;
    operator: string;
}

export default class BaseRequestQuery {
    protected queryFields: { [key: string]: QueryField } = {};

    constructor(fields?: { [key: string]: { value: any, operator: string } }) {
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

    public addField(fieldName: string, value: any, operator: string) {
        this.queryFields[fieldName] = { fieldName, value, operator };
    }
}
