import Airtable, { Record, FieldSet } from 'airtable';
import { config } from '../config';

class AirtableClient {
    constructor() {
        Airtable.configure({ apiKey: config.airtable.apiKey })
    }

    async create(databaseId: string, tableId: string, data: object): Promise<Record<FieldSet>> {
        return await Airtable.base(databaseId).table(tableId).create(data);
    }
}

export default new AirtableClient();