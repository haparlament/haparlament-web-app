import { Request, Response } from 'express';
import firestore from '../utils/firestore-client';
import { validateDto } from '../services/validation-service';
import { CreateSessionRequestDto } from '../dto/session-request';
import logger from '../utils/logger';
import { isEmpty } from 'lodash';
import { syncAirtable } from '../cron-jobs/air-table';

export const SESSION_REQUESTS = 'session_requests';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await firestore.getAll(SESSION_REQUESTS);
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
    const now = new Date();
    const createsessionRequestDto = new CreateSessionRequestDto(
        username,
        imageId,
        feeling,
        phoneNumber,
        day,
        hourRange
    );

    // Due to some weird bug I can't set the below in the constructor so setting like this.
    createsessionRequestDto.createdAt = now;
    createsessionRequestDto.updatedAt = now;

    const errors = await validateDto(createsessionRequestDto);
    if (!isEmpty(errors)) {
        logger.error(errors);
        return res.status(400).json(errors);
    }

    try {
        await firestore.create(SESSION_REQUESTS, createsessionRequestDto.json());
        return res.status(200).json(createsessionRequestDto);
    } catch (error) {
        logger.error(error);
        return res.status(500);
    }
};
