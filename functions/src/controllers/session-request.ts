import { Request, Response } from 'express';
import db from '../utils/firestore-client';
import { validateDto } from '../services/validation-service';
import { CreateSessionRequestDto } from '../dto/session-request';
import logger from '../utils/logger';
import { isEmpty } from 'lodash';

const sessionRequestsCollection = 'session_requests';

export const getAllSessionRequests = async (req: Request, res: Response) => {
    try {
        const sessionRequests = await db.getAll(sessionRequestsCollection);
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
        await db.create(sessionRequestsCollection, req.body);
        return res.status(200).json(createsessionRequestDto);
    } catch (error) {
        logger.error(error);
        return res.status(500);
    }
};
