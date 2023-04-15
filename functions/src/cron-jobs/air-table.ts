import firestore from '../utils/firestore-client';
import airtable from '../utils/airtable-client';
import { config } from '../config';
import { SESSION_REQUESTS } from '../controllers/session-request';
import logger from '../utils/logger';

const AIRTABLE_TABLE_ID = 'Session Request';

export const syncAirtable = async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);
    const sessionRequests = await firestore.getAllByDate(SESSION_REQUESTS, '>=', yesterday);

    const createSessionRequestsTasks = sessionRequests.map((doc) => {
        const airTableDoc = {
            UserName: doc.username,
            ImageID: doc.imageId,
            Feeling: doc.feeling,
            PhoneNumber: doc.phoneNumber,
            Day: doc.day,
            HourRange: doc.hourRange,
        };
        return airtable.create(config.airtable.databaseId, AIRTABLE_TABLE_ID, airTableDoc);
    });

    try {
        await Promise.all(createSessionRequestsTasks);
    } catch (error) {
        logger.error(error);
    }
};
