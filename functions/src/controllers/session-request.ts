import { Request, Response } from 'express';
import firestore from '../utils/firestore-client';
// import { validateDto } from '../services/validation-service';
import { CreateSessionRequestDto } from '../dto/session-request';
import logger from '../utils/logger';
// import { isEmpty } from 'lodash';
import airtable from '../utils/airtable-client';
import { config } from '../config';

export const SESSION_REQUESTS = 'session_requests';
const AIRTABLE_TABLE_ID = 'Session Request';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await firestore.getAll(SESSION_REQUESTS);
        res.status(200).json(sessionRequests);
    } catch (error) {
        logger.error(error);
        res.status(500);
    }
};
interface Time {
    hour: number,
    minute: number
}
export interface TimeRange {
    from: Time,
    to: Time
}


export const createSessionRequest = async (req: Request, res: Response) => {
    const {
        userName,
        phoneNumber,
        imageId,
        emotion,
        days,
        hoursRanges,
    } = req.body;
    const now = new Date();
    const createsessionRequestDto = new CreateSessionRequestDto(
        userName,
        imageId,
        emotion,
        phoneNumber,
        days,
        hoursRanges
    );

    // Due to some weird bug I can't set the below in the constructor so setting like this.
    createsessionRequestDto.createdAt = now;
    createsessionRequestDto.updatedAt = now;
    // temp removal of validations

    // const errors = await validateDto(createsessionRequestDto);
    // if (!isEmpty(errors)) {
    //     logger.error(errors);
    //     return res.status(400).json(errors);
    // }

    try {
        await firestore.create(SESSION_REQUESTS, createsessionRequestDto.json());
        await airtable.create(config.airtable.databaseId, AIRTABLE_TABLE_ID, createsessionRequestDto.airtable());
        return res.status(200).json(createsessionRequestDto);
    } catch (error) {
        logger.error(error);
        return res.status(500);
    }
};
