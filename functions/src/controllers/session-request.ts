import { Request, Response } from 'express';
import firestore from '../utils/firestore-client';
import airtable from '../utils/airtable-client';
import { validateDto } from '../services/validation-service';
import { CreateSessionRequestDto } from '../dto/session-request';
import logger from '../utils/logger';
import { isEmpty } from 'lodash';

const sessionRequestsCollection = 'session_requests';
const AIRTABLE_DATABASE_ID = 'appsk8XVQplqlNAAz';
const AIRTABLE_TABLE_ID = 'Session Request';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await firestore.getAll(sessionRequestsCollection);
        res.status(200).json(sessionRequests);
    } catch (error) {
        logger.error(error);
        res.status(500);
    }
};

export const createSessionRequest = async (req: Request, res: Response) => {
    const {
        username,
        imageId,
        feeling,
        phoneNumber,
        day,
        hourRange,
    } = req.body;
    const createsessionRequestDto = new CreateSessionRequestDto(
        username,
        imageId,
        feeling,
        phoneNumber,
        day,
        hourRange
    );

    const errors = await validateDto(createsessionRequestDto);
    if (!isEmpty(errors)) {
        logger.error(errors);
        return res.status(400).json(errors);
    }

    try {
        await firestore.create(sessionRequestsCollection, createsessionRequestDto.json());
        await airtable.create(AIRTABLE_DATABASE_ID, AIRTABLE_TABLE_ID, createsessionRequestDto.airtable());
        return res.status(200).json(createsessionRequestDto);
    } catch (error) {
        logger.error(error);
        return res.status(500);
    }
};
