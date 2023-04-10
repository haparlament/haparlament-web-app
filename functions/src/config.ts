import { defineSecret, defineString } from 'firebase-functions/params';

export const config = {
    airtable: {
        apiKey: defineSecret('AIRTABLE_API_KEY').toString(),
        databaseId: defineString('AIRTABLE_DATABASE_ID').toString(),
    },
};
