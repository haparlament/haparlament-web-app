import Airtable, { Record, FieldSet } from 'airtable';

class AirtableClient {
    constructor() {
        Airtable.configure({ apiKey: process.env.SECRETS_AIRTABLE_API_KEY })
    }

    async create(databaseId: string, tableId: string, data: object): Promise<Record<FieldSet>> {
        return await Airtable.base(databaseId).table(tableId).create(data);
    }
}

export default new AirtableClient();