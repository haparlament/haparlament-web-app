import { defineSecret } from 'firebase-functions/params';

export const config = {
    airtable: {
        apiKey: defineSecret('AIRTABLE_API_KEY').toString()
    }
}